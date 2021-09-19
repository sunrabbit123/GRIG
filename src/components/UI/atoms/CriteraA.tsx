import styled, { css } from "styled-components";
import { capitalize } from "../../../util/strings";

const NavCriteriaA = styled.a<{selected : string, text : string}>`
  display: block;
  position: relative;
  margin : 0rem 0rem 4rem 0rem;
  cursor : pointer;
  &:hover {
    font-weight: 600;
  }
  ${(props : any) => props.selected !== props.text ? css`` : css`
    font-weight: 600;
  `}
`;

const CriteriaA: React.FC<{ text: string; onClickEvent: Function, selected: string }> = (
  props
) => {
  return (
    <>
      <NavCriteriaA onClick={() => props.onClickEvent(props.text)} selected={props.selected} text={props.text}>
        {capitalize(props.text)}
      </NavCriteriaA>
    </>
  );
};

export default CriteriaA;
