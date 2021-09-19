import styled, { css } from "styled-components";
import { capitalize } from "../../../util/strings";

const NavCriteriaA = styled.a<{selected : string, text : string}>`
  display: block;
  width: 8em;
  position: relative;
  margin : 0 0 4rem 0;
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
