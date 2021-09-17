import styled from "styled-components";
import { capitalize } from "../../../util/strings";

const NavCriteriaA = styled.a`
  display: block;
  margin: 10%;
`;

const CriteriaA: React.FC<{ text: string; onClickEvent: Function }> = (
  props
) => {
  return (
    <>
      <NavCriteriaA onClick={() => props.onClickEvent(props.text)}>
        {capitalize(props.text)}
      </NavCriteriaA>
    </>
  );
};

export default CriteriaA;
