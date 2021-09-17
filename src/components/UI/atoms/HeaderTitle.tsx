import styled from "styled-components";
import { title } from "../../../config/messages";

const TitleMessage = styled.h1``;

const HeaderTitle: React.FC = () => {
  return (
    <>
      <TitleMessage>{title}</TitleMessage>
    </>
  );
};

export default HeaderTitle;
