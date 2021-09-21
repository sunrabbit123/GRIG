import React from "react";
import styled from "styled-components";
import HeaderMainTitle from "../atoms/HeaderMainTitle";
import HeaderSubTitle from "../atoms/HeaderSubTitle";

const Title = styled.div`
  text-align : center;
  color: #DB7770;
`;
const HeaderText: React.FC = (): JSX.Element => {
  return <>
          <Title>
            <HeaderMainTitle />
            <HeaderSubTitle />
          </Title>
        </>;
};

export default HeaderText;
