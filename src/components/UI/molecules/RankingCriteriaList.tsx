import React from "react";

import { UserRankingCriteriaList } from "../../../type/user";
import CriteraA from "../atoms/CriteraA";

const RankingCriteriaList: React.FC<{ onClickEvent: Function }> = (props) => {
  return (
    <>
      {React.Children.map(UserRankingCriteriaList, (criteria) => (
        <CriteraA text={criteria} onClickEvent={props.onClickEvent}></CriteraA>
      ))}
    </>
  );
};

export default RankingCriteriaList;
