import styled from "styled-components";

const RankingHeadTexts = styled.th`
  padding: 1rem 2rem;
`;

const RankingHeadText: React.FC<{ text: string | number }> = (props) => {
  return (
    <>
      <RankingHeadTexts>{props.text}</RankingHeadTexts>
    </>
  );
};

export default RankingHeadText;
