import React from "react";
import styled from "styled-components";

import { issueLink, repoOwner, signinLink } from "../../../config/information";
import { description } from "../../../config/messages";
import HeaderLink from "../atoms/Linking";

import "../../../font/SeoulHangangM.css";

const Description = styled.p`
  text-align: left;
  font-family: SeoulHangangM;
  white-space: pre-wrap;

  display: block;
  width: 70%;
  padding-left: 25%;
  margin: 0 auto;

  color: #777777;
  font-size: 108%;
  line-height: 1.5em;
`;

const HeaderText: React.FC = (): JSX.Element => {
  return (
    <>
      <Description>
        {description}
        피드백 요청이나 버그 제보는{" "}
        <HeaderLink text={"여기"} link={issueLink} />로 이슈를 남기거나,{" "}
        <HeaderLink text={"해당 사이트 소유자"} link={repoOwner} />
        에게 연락 부탁드립니다.
        <br />
        만약 랭킹에 등록하고싶으시다면{" "}
        <HeaderLink text={"여기"} link={signinLink} />를 눌러주세요!!
      </Description>
    </>
  );
};

export default HeaderText;
