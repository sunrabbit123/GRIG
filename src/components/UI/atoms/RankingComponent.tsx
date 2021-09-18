import styled from "styled-components";

const RankingComponents = styled.td`
border-bottom: 0.1rem solid #e1e1e1;
padding: 1.2rem 1.5rem 1.2rem 1rem;
`;

const RankingComponent: React.FC<{ content: number | string | undefined }> = (props) => {
  return (
    <>
      <RankingComponents>{props.content}</RankingComponents>
    </>
  );
};

export default RankingComponent;
