import React from "react";
import styled from "styled-components";

import { UserRankingCriteriaList } from "../../../type/user";
import CriteraA from "../atoms/CriteraA";


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

const RankingCriteriaList: React.FC<{ onClickEvent: Function, selected: string }> = (props) => {
  return (
    <>
      {React.Children.map(UserRankingCriteriaList, (criteria) => ( 
        <CriteraA text={criteria} onClickEvent={props.onClickEvent} selected={props.selected}></CriteraA>
      ))}
      <RankingCriteriaListRightLine ></RankingCriteriaListRightLine>
    </>
  );
};

export default RankingCriteriaList;
