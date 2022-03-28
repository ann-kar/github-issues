import { IRepository, ISearchResponse, SearchResultType } from "../interfaces/search";
import { GithubClient } from "../api/GithubClient";

export class GithubFacade {
  private readonly client = new GithubClient();
  async search(params: {
    perPage: number;
    page: number;
  }): Promise<ISearchResponse> {
    const githubRepositories = await this.client.getRepositories(params);
    const searchResultRepositories: IRepository[] =
      githubRepositories.items.map((ghRepo) => ({
        name: ghRepo.name,
        description: ghRepo.description,
        updatedAt: ghRepo.updated_at,
        id: ghRepo.id,
        starsCount: ghRepo.stargazers_count,
        type: SearchResultType.Repository
      }));
    return {
      items: searchResultRepositories,
      metadata: {
        totalCount: 10,
        ...params,
      },
    };
  }
}
