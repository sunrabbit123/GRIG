import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GenerationsListAndCount } from "../../../type/user";
import { getGenerationsInformAtGraphQL } from "../../../util/ranking";
import GenerationA from "../atoms/GenerationA";

interface GenerationListProps {
  selected: number;
  onClickEvent: Function;
}
const GenerationListBlock = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
const GenerationListComponent = styled.li`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const GenerationList: React.FC<GenerationListProps> = (
  props: GenerationListProps
) => {
  const [generationList, setGenerationList] = useState<
    GenerationsListAndCount[]
  >([]);

  function renderGenerationList() {
    getGenerationsInformAtGraphQL().then((res: GenerationsListAndCount[]) => {
      setGenerationList([{ _id: 0, count: 0 }, ...res]);
    });
  }

  useEffect(() => {
    renderGenerationList();
  }, []);
  return (
    <GenerationListBlock>
      {generationList.map((inform: GenerationsListAndCount) => (
        <GenerationListComponent>
          <GenerationA
            generationInform={inform}
            onClickEvent={props.onClickEvent}
            selected={props.selected}
          />
        </GenerationListComponent>
      ))}
    </GenerationListBlock>
  );
};

export default GenerationList;
