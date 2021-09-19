import styled from "styled-components";

const DescriptionContainer = styled.td`
  border-bottom: 0.1rem solid #e1e1e1;
  padding: 1.2rem 1.4rem 1.2rem 1rem;
`;
const DescriptionContents = styled.p`
  margin-bottom : 0;
`;
const DescriptionSubContents = styled.p`
  margin-top : 0.2em;
  color: #666666;
  font-size : 80%;
`;

const DescriptionContent: React.FC<{bio : string, public_repos: number,  }> = (props) => {
  return (
    <DescriptionContainer>
      <DescriptionContents>{props.bio || "현재 bio가 등록되어있지 않아요!"}</DescriptionContents>
      <DescriptionSubContents>{props.public_repos} public_repos</DescriptionSubContents>
    </DescriptionContainer>
  );
};

export default DescriptionContent;
