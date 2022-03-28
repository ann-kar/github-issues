export interface GithubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}
export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: GithubUserType;
  site_admin: boolean;
}

export enum GithubUserType {
  Organization = "Organization",
  User = "User",
}
