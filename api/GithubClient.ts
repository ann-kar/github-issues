import fetch from "node-fetch";
import {
  GithubRepository,
  GithubUserSearchResponse,
  GithubUser,
  GithubRepositorySearchResponse,
} from "../interfaces/github";

export class GithubClient {
  async getUsers(params: {
    query: string;
    perPage: number;
    page: number;
  }): Promise<GithubUserSearchResponse> {
    const { perPage, page, query } = params;
    const response = await fetch(
      "https://api.github.com/search/users?" +
        new URLSearchParams({
          q: `type:user ${query}`,
          per_page: perPage.toString(),
          page: page.toString(),
        }),
      {
        headers: GithubClient.getAuthorizationHeaders(),
      }
    );
    return (await response.json()) as GithubUserSearchResponse;
  }

  async getRepositories(params: {
    query: string;
    perPage: number;
    page: number;
  }): Promise<GithubRepositorySearchResponse> {
    const { perPage, page, query } = params;
    const response = await fetch(
      "https://api.github.com/search/repositories?" +
        new URLSearchParams({
          q: `size:>0 ${query}`,
          per_page: perPage.toString(),
          page: page.toString(),
        }),
      { headers: GithubClient.getAuthorizationHeaders() }
    );
    return (await response.json()) as GithubRepositorySearchResponse;
  }

  async getUser(id: string): Promise<GithubUser> {
    const response = await fetch(`https://api.github.com/users/${id}`, {
      headers: GithubClient.getAuthorizationHeaders(),
    });
    return (await response.json()) as GithubUser;
  }

  async getRepository(organization: string, repository: string) {
    const response = await fetch(
      `https://api.github.com/repos/${organization}/${repository}`,
      { headers: GithubClient.getAuthorizationHeaders() }
    );
    return (await response.json()) as GithubRepository;
  }

  private static getAuthorizationHeaders() {
    return {
      Authorization: process.env.GITHUB_TOKEN!,
    };
  }
}
