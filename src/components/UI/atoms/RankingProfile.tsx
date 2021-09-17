import styled from "styled-components";

const RankingProfileTag = styled.img`
  border-radius: 30%;
  border: 1px solid gray;
`;

const RankingProfile: React.FC<{ link: string }> = (props) => {
  return (
    <td>
      <RankingProfileTag src={props.link} />
    </td>
  );
};

export default RankingProfile;
