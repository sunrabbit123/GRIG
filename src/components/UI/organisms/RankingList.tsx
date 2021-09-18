import { useEffect, useState } from "react";
import styled from "styled-components";

import { UserInform, UserRankingCriteria } from "../../../type/user";
import { getUserInformAtGraphQL } from "../../../util/ranking";
import RankingCriteriaList from "../molecules/RankingCriteriaList";
import RankingHead from "../molecules/RankingHead";
import UserList from "../molecules/UserList";

import "../../../font/SeoulHangangM.css";

const MainContent = styled.main`
  font-family : SeoulHangangM;

  max-width : 80rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 30px;

  font-size : 1.2em;
`;
const RankingCriteriaListContainer = styled.nav`
  display: fixed;
  margin-top : 4rem;
  height: 525px;
  width: 10%;
`;

const RankingContent = styled.section`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

const RankingTable = styled.table`
  text-align:left;
`;

const RankingList: React.FC = () => {
  const [criteria, setCriteria] = useState<UserRankingCriteria>(
    UserRankingCriteria.contributions
  );
  const [ranking, setRanking] = useState<UserInform[]>([]);

  const onClickCriteria = (criterias: UserRankingCriteria) => {
    setCriteria(criterias);
   
  }
  const updateRanking = (criterias : UserRankingCriteria) => {
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
        <RankingCriteriaList onClickEvent={onClickCriteria} />
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
