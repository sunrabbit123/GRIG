import styled from "styled-components";
import { capitalize } from "../../../util/strings";

const NavCriteriaA = styled.a`
  display: block;
  margin : 0rem 0rem 4rem 0rem;
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
