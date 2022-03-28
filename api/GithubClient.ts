import fetch from "node-fetch";
import {
  GithubRepository,
  GithubUserSearchResponse,
  GithubSearchUser,
  GithubUser,
  GithubRepositorySearchResponse,
} from "../interfaces/github";

export class GithubClient {
  async getUsers(params: {
    perPage: number;
    page: number;
  }): Promise<GithubUserSearchResponse> {
    const { perPage, page } = params;
    const response = await fetch(
      "https://api.github.com/search/users?" +
        new URLSearchParams({
          q: "type:user",
          per_page: perPage.toString(),
          page: page.toString(),
        })
    );
    return (await response.json()) as GithubUserSearchResponse;
  }

  async getRepositories(params: {
    perPage: number;
    page: number;
  }): Promise<GithubRepositorySearchResponse> {
    const { perPage, page } = params;
    const response = await fetch(
      "https://api.github.com/search/repositories?" +
        new URLSearchParams({
          q: "size:>0",
          per_page: perPage.toString(),
          page: page.toString(),
        })
    );
    return (await response.json()) as GithubRepositorySearchResponse;
  }

  async getUser(id: string): Promise<GithubUser> {
    const response = await fetch(`https://api.github.com/users/${id}`);
    return (await response.json()) as GithubUser;
  }

  async getRepository(organization: string, repository: string) {
    const response = await fetch(
      `https://api.github.com/repos/${organization}/${repository}`
    );
    return (await response.json()) as GithubRepository;
  }
}
