import React from "react";
import styled from "styled-components";

import { UserRanking } from "../../../type/user";
import DescriptionContent from "../atoms/DescriptionContent";
import NameComponent from "../atoms/NameComponent";
import RankingComponent from "../atoms/RankingComponent";
import RankingProfile from "../atoms/RankingProfile";

const UserBlock = styled.tbody``;
const User = styled.tr`
  padding: 1.4rem 0rem 1.4rem 0rem;
`;

const UserList: React.FC<UserRanking> = (props) => {
  const users = props.rankings;
  return (
    <UserBlock>
      {users.map((user, idx) => (
        <User>
          <RankingComponent content={idx + 1} />
          <NameComponent
            name={`${user.name}(${user.nickname})`}
            generation={user.generation}
            link={`https://github.com/${user.nickname}`}
          />
          <RankingComponent content={user[props.criteria]} />
          <RankingProfile link={user.avatar_url} />
          <DescriptionContent bio={user.bio} public_repos={user.public_repos} />
        </User>
      ))}
    </UserBlock>
  );
};

export default UserList;
