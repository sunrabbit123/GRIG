import { UserInform, UserRankingCriteriaType } from "../type/user";
import axios, { AxiosResponse } from "axios";
import {
  getGraphQLRankingQuery,
  getRankingApiUrl,
  getUserInformCriteria,
} from "../config/ranking";

export const getUserInformAtGraphQL: Function = async (
  criteria: UserRankingCriteriaType
): Promise<UserInform[]> => {
  const result: AxiosResponse = await axios({
    method: "POST",
    url: getRankingApiUrl,
    data: {
      query: getGraphQLRankingQuery(criteria),
      variables: getUserInformCriteria(criteria),
    },
  });
  return result.data.data.ranking.sort((a: any, b: any) =>
    a[criteria] < b[criteria] ? 1 : -1
  );
};
