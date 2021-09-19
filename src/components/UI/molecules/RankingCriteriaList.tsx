import React from "react";
import styled from "styled-components";

import { UserRankingCriteriaList } from "../../../type/user";
import CriteraA from "../atoms/CriteraA";

const RankingCriteriaListContainer = styled.div`
  padding-top : 1rem;
  padding-right : 3rem;
`;

const RankingCriteriaListRightLine = styled.div`
  display : fixed;
  background-color : #DB7770;
  color : #DB7770;
  border-radius : 30px;
  padding-bottom : 650px;
`;

const RankingCriteriaList: React.FC<{ onClickEvent: Function, selected: string }> = (props) => {
  return (
    <>
      <RankingCriteriaListContainer>
        {React.Children.map(UserRankingCriteriaList, (criteria) => ( 
          <CriteraA text={criteria} onClickEvent={props.onClickEvent} selected={props.selected}></CriteraA>
        ))}
      </RankingCriteriaListContainer>
      <RankingCriteriaListRightLine >1</RankingCriteriaListRightLine>
    </>
  );
};

export default RankingCriteriaList;
