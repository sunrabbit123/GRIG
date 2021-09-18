import React from "react";
import styled from "styled-components";

import { UserRanking } from "../../../type/user";
import RankingComponent from "../atoms/RankingComponent";
import RankingProfile from "../atoms/RankingProfile";
const UserBlock = styled.tbody``;
const User = styled.tr``;

const UserList: React.FC<UserRanking> = (props) => {
  const users = props.rankings;
  console.log(users);
  return (
    <UserBlock>
      {users.map((user, idx) => (
        <User>
          <RankingComponent content={idx + 1} />
          <RankingComponent content={`${user.name}(${user.nickname})`} />
          <RankingComponent content={user[props.criteria] ?? "contributions"} />
          <RankingProfile link={user.profile_img} />
          <RankingComponent content={user.bio} />
        </User>
      ))}
    </UserBlock>
  );
};

export default UserList;
