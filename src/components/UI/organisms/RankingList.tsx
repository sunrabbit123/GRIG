import { useEffect, useState } from "react";
import styled from "styled-components";

import {
  UserInform,
  UserRankingCriteria,
  UserRankingCriteriaType,
} from "../../../type/user";
import { getUserInformAtGraphQL } from "../../../util/ranking";
import RankingCriteriaList from "../molecules/RankingCriteriaList";
import RankingHead from "../molecules/RankingHead";
import UserList from "../molecules/UserList";

import "../../../font/SeoulHangangM.css";
import RankingKindOfGeneration from "../molecules/RankingKindOfGeneration";

const MainContent = styled.main`
  font-family: SeoulHangangM;

  max-width: 75em;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
  margin-left: 8em;
  font-size: 1.08em;
`; // 추후 글로벌 컴포넌트로 빼기

const RankingCriteriaListContainer = styled.nav`
  position: sticky;
  display: flex;
  top: 100px;
  margin-top: 4rem;
  height: 525px;
  width: 20em;
`;

const RankingContent = styled.section`
  display: block;
  width: 80%;
  padding-left: 3em;
  margin: 0 auto;
`;

const RankingTable = styled.table`
  text-align: left;
`;

const RankingCriteriaListRightLine = styled.div`
  position: absolute;
  right 0;
  top : -1em;
  background-color : #DB7770;
  color : #DB7770;
  width: 20px;
  border-radius : 30px;
  padding-bottom : 35rem;
`;

const RankingList: React.FC = () => {
  const [criteria, setCriteria] = useState<UserRankingCriteriaType>(
    UserRankingCriteria.contributions
  );
  const [generationStatus, setGeneration] = useState<number>(0);
  const [ranking, setRanking] = useState<UserInform[]>([]);

  const onClickCriteria = (criterias: UserRankingCriteriaType) => {
    setCriteria(criterias);
  };
  const onClickGeneration = (generations: number) => {
    setGeneration(generations);
  };
  const updateRanking = (
    criterias: UserRankingCriteriaType,
    generationValue: number
  ) => {
    getUserInformAtGraphQL(criterias, generationValue).then(
      (res: UserInform[]) => {
        setRanking(res);
      }
    );
  };

  useEffect(() => {
    updateRanking(criteria, generationStatus);
  }, [criteria, generationStatus]);

  return (
    <MainContent>
      <RankingCriteriaListContainer>
        <RankingKindOfGeneration
          onClickEvent={onClickGeneration}
          selected={generationStatus}
        />
        <RankingCriteriaList
          onClickEvent={onClickCriteria}
          selected={criteria}
        />
        <RankingCriteriaListRightLine />
      </RankingCriteriaListContainer>
      <RankingContent>
        <RankingTable>
          <RankingHead criteria={criteria} />
          <UserList rankings={ranking} criteria={criteria} />
        </RankingTable>
      </RankingContent>
    </MainContent>
  );
};

export default RankingList;
