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

const MainContent = styled.main`
  font-family: SeoulHangangM;

  max-width: 75em;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
  margin-left: 15em;
  font-size: 1.08em;
`; // 추후 글로벌 컴포넌트로 빼기

const RankingCriteriaListContainer = styled.nav`
  display: block;
  position: sticky;
  top: 100px;
  margin-top: 4rem;
  height: 525px;
  width: 10em;
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

const RankingList: React.FC = () => {
  const [criteria, setCriteria] = useState<UserRankingCriteriaType>(
    UserRankingCriteria.contributions
  );
  const [ranking, setRanking] = useState<UserInform[]>([]);

  const onClickCriteria = (criterias: UserRankingCriteriaType) => {
    setCriteria(criterias);
  };
  const updateRanking = (criterias: UserRankingCriteriaType) => {
    getUserInformAtGraphQL(criterias).then((res: UserInform[]) => {
      setRanking(res);
    });
  };

  useEffect(() => {
    updateRanking(criteria);
  }, [criteria]);

  return (
    <MainContent>
      <RankingCriteriaListContainer>
        <RankingCriteriaList
          onClickEvent={onClickCriteria}
          selected={criteria}
        />
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
