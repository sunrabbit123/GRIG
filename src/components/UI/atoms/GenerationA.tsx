import styled, { css } from "styled-components";
import { GenerationsListAndCount } from "../../../type/user";

const NavGenerationA = styled.a<{ selected: number; text: number }>`
  display: block;
  width: 8em;
  position: relative;
  margin: 0 0 4rem 0;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
  ${(props: any) =>
    props.selected !== props.text
      ? css``
      : css`
          font-weight: 600;
        `}
`;

const GenerationA: React.FC<{
  generationInform: GenerationsListAndCount;
  onClickEvent: Function;
  selected: number;
}> = (props) => {
  return (
    <>
      <NavGenerationA
        onClick={() => props.onClickEvent(props.generationInform._id)}
        selected={props.selected}
        text={props.generationInform._id}
      >
        {props.generationInform._id !== 0
          ? `${props.generationInform._id}기 (${props.generationInform.count}명)`
          : `전체 보기`}
      </NavGenerationA>
    </>
  );
};

export default GenerationA;
