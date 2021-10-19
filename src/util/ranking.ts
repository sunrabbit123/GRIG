import {
  GenerationsListAndCount,
  UserInform,
  UserRankingCriteriaType,
} from "../type/user";
import axios, { AxiosResponse } from "axios";
import {
  getGraphQLGenerationQuery,
  getGraphQLRankingQuery,
  getRankingApiUrl,
  getUserInformCriteria,
} from "../config/ranking";

export const getUserInformAtGraphQL: Function = async (
  criteria: UserRankingCriteriaType,
  generationValue: number
): Promise<UserInform[]> => {
  const result: AxiosResponse = await axios({
    method: "POST",
    url: getRankingApiUrl,
    data: {
      query: getGraphQLRankingQuery(criteria),
      variables: getUserInformCriteria(criteria, generationValue),
    },
  });
  if (!result.data.data.ranking) {
    return [];
  }
  return result.data.data.ranking.sort((a: any, b: any) =>
    a[criteria] < b[criteria] ? 1 : -1
  );
};

export const getGenerationsInformAtGraphQL: Function = async (): Promise<
  GenerationsListAndCount[]
> => {
  const result: AxiosResponse = await axios({
    method: "POST",
    url: getRankingApiUrl,
    data: {
      query: getGraphQLGenerationQuery(),
      variables: {},
    },
  });
  return result.data.data.generations ?? [];
};
