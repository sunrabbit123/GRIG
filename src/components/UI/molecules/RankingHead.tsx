import React from "react";
import styled from "styled-components";

import { capitalize } from "../../../util/strings";
import RankingHeadText from "../atoms/RankingHeadText";

const TextRows = styled.tr``;

const RankingHead: React.FC<{ criteria: string }> = (props) => {
  const headText: string[] = [
    "   ",
    "Name",
    capitalize(props.criteria),
    "Profile",
    "Bio",
  ];
  return (
    <>
      <thead>
        <TextRows>
          {React.Children.map(headText, (headText) => (
            <RankingHeadText text={headText} />
          ))}
        </TextRows>
      </thead>
    </>
  );
};

export default RankingHead;
