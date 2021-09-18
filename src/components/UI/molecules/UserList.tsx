import React from "react";
import styled from "styled-components";

import { UserRanking } from "../../../type/user";
import NameComponent from "../atoms/NameComponent";
import RankingComponent from "../atoms/RankingComponent";
import RankingProfile from "../atoms/RankingProfile";

const UserBlock = styled.tbody``;
const User = styled.tr`
  padding : 1.4rem 0rem 1.4rem 0rem
`;

const UserList: React.FC<UserRanking> = (props) => {
  const users = props.rankings;
  return (
    <UserBlock>
      {users.map((user, idx) => (
        <User>
          <RankingComponent content={idx + 1} />
          <NameComponent name={`${user.name}(${user.nickname})`} generation={user.generation}/>
          <RankingComponent content={user[props.criteria]}/>
          <RankingProfile link={user.profile_img} />
          <RankingComponent content={user.bio} />
        </User>
      ))}
    </UserBlock>
  );
};

export default UserList;
