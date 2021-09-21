import styled from "styled-components";
import { mainTitle } from "../../../config/messages";

const TitleMessage = styled.h1`
  margin : 0;
  font-size : 2.5em;  
`;

const HeaderTitle: React.FC = () => {
  return (
    <>
      <TitleMessage>{mainTitle}</TitleMessage>
    </>
  );
};

export default HeaderTitle;
