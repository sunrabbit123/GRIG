import styled from "styled-components";

const RankingProfileContainer = styled.td`
  border-bottom: 0.1rem solid #e1e1e1;
  padding: 1.2rem 1.5rem 1.2rem 1rem;
`;
const RankingProfileTag = styled.img`
  border-radius: 50%;
  height : 100px;
  width : 100px;
`;

const RankingProfile: React.FC<{ link: string }> = (props) => {
  return (
    <RankingProfileContainer>
      <RankingProfileTag src={props.link ?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} />
    </RankingProfileContainer>
  );
};

export default RankingProfile;
