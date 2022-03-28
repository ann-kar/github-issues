import fetch from "node-fetch";
import { GithubSearchResponse } from "../interfaces/github";

export class GithubClient {
  async getUsers(params: {
    perPage: number;
    page: number;
  }): Promise<GithubSearchResponse> {
    const { perPage, page } = params;
    const response = await fetch(
      "https://api.github.com/search/users?" +
        new URLSearchParams({
          q: "type:user",
          per_page: perPage.toString(),
          page: page.toString(),
        })
    );
    return (await response.json()) as GithubSearchResponse;
  }
}
