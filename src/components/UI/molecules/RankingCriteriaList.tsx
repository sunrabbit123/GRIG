import React from "react";
import styled from "styled-components";

import { UserRankingCriteriaList } from "../../../type/user";
import CriteraA from "../atoms/CriteraA";

const RankingCriteriaListBlock = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0px;
  padding: 0px;
  right: 0;
`;
const RankingCriteria = styled.li`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const RankingCriteriaList: React.FC<{
  onClickEvent: Function;
  selected: string;
}> = (props) => {
  return (
    <>
      <RankingCriteriaListBlock>
        {React.Children.map(UserRankingCriteriaList, (criteria) => (
          <RankingCriteria>
            <CriteraA
              text={criteria}
              onClickEvent={props.onClickEvent}
              selected={props.selected}
            ></CriteraA>
          </RankingCriteria>
        ))}
      </RankingCriteriaListBlock>
    </>
  );
};

export default RankingCriteriaList;
