export interface GraphQLVariables {
  [k: string]: string | number;
}
export interface GraphQLForm {
  query: string;
  variables: GraphQLVariables;
}

export interface UserInform {
  name: string;
  nickname: string;
  generation: number;
  public_repos: number;
  bio: string;
  profile_img: string;

  stared?: number;
  contributions?: number;
  following?: number;
  followers?: number;
  forked?: number;
  issues?: number;
  pullRequests?: number;
}

export interface UserRanking {
  rankings: UserInform[];
  criteria: UserRankingCriteria;
}
export const UserRankingCriteria = {
  stared: "stared",
  contributions: "contributions",
  following: "following",
  followers: "followers",
  forked: "forked",
  issues: "issues",
  pullRequests: "pullRequests",
} as const;

export type UserRankingCriteria =
  typeof UserRankingCriteria[keyof typeof UserRankingCriteria];

export const UserRankingCriteriaList: string[] = [
  "contributions",
  "stared",
  "following",
  "followers",
  "forked",
  "issues",
  "pullRequests",
];
