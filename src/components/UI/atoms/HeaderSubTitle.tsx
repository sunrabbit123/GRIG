import styled from "styled-components";
import { subTitle } from "../../../config/messages";
const SubTitleMessage = styled.h2`
  margin: 0;
  font-size: 1.3em;
`;
const HeaderTitle: React.FC = () => {
  return (
    <>
      <SubTitleMessage>{subTitle}</SubTitleMessage>
    </>
  );
};

export default HeaderTitle;
