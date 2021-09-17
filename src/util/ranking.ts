import { UserInform, UserRankingCriteria } from "../type/user";
import axios, { AxiosResponse } from "axios";
import {
  getGraphQLRankingQuery,
  getRankingApiUrl,
  getUserInformCriteria,
} from "../config/ranking";

export const getUserInformAtGraphQL: Function = async (
  criteria: UserRankingCriteria
): Promise<UserInform[]> => {
  const result: AxiosResponse = await axios({
    method: "POST",
    url: getRankingApiUrl,
    data: {
      query: getGraphQLRankingQuery(criteria),
      criteria: getUserInformCriteria(criteria),
    },
  });
  console.log(result.data);
  return result.data.data.ranking;
};
