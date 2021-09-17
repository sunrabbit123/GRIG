import styled from "styled-components";

const RankingComponents = styled.td`
  margin-right 3rem;
`;

const RankingComponent: React.FC<{ content: number | string }> = (props) => {
  return (
    <>
      <RankingComponents>{props.content}</RankingComponents>
    </>
  );
};

export default RankingComponent;
