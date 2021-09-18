import styled from "styled-components";

const RankingHeadTexts = styled.th`
  border-bottom: 0.1rem solid #e1e1e1;
  padding: 1.2rem 1.5rem 1.2rem 1rem;
`;

const RankingHeadText: React.FC<{ text: string | number }> = (props) => {
  return (
    <>
      <RankingHeadTexts>{props.text}</RankingHeadTexts>
    </>
  );
};

export default RankingHeadText;
