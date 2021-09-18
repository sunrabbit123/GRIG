import { useEffect, useState } from "react";
import styled from "styled-components";
import { UserInform, UserRankingCriteria } from "../../../type/user";
import { getUserInformAtGraphQL } from "../../../util/ranking";
import RankingCriteriaList from "../molecules/RankingCriteriaList";
import RankingHead from "../molecules/RankingHead";
import UserList from "../molecules/UserList";

const MainContent = styled.main`
  max-width : 100rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
`;
const RankingCriteriaListContainer = styled.nav`
  display: block;
  margin-top : 4rem;
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
