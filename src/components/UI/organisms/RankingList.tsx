import { useState } from "react";
import styled from "styled-components";
import { UserInform, UserRankingCriteria } from "../../../type/user";
import { getUserInformAtGraphQL } from "../../../util/ranking";
import RankingCriteriaList from "../molecules/RankingCriteriaList";
import RankingHead from "../molecules/RankingHead";
import UserList from "../molecules/UserList";

const MainContent = styled.main`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
`;
const RankingCriteriaListContainer = styled.nav`
  display: block;
  width: 20%;
  margin-left: 5%;
`;

const RankingContent = styled.section`
  display: block;
  width: 79%;
  margin: 0 auto;
`;

const RankingTable = styled.table``;

const RankingList: React.FC = () => {
  const [ranking, setRanking] = useState<UserInform[]>([]);

  const [criteria, setCriteria] = useState<UserRankingCriteria>(
    UserRankingCriteria.contributions
  );

  const onClickCriteria = (criterias: UserRankingCriteria) => {
    setCriteria(criterias);
    getUserInformAtGraphQL(criterias).then((res: UserInform[]) => {
      setRanking(res);
    });
  };
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
