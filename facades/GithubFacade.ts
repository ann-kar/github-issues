import {
  IRepository,
  ISearchResponse,
  IUser,
  SearchResultType,
} from "../interfaces/search";
import { GithubClient } from "../api/GithubClient";

export class GithubFacade {
  private readonly client = new GithubClient();

  async search(params: {
    query: string;
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
        type: SearchResultType.Repository,
      }));
    const githubUsers = await this.client.getUsers(params);
    const searchResultUsers: IUser[] = await Promise.all(
      githubUsers.items.map(async (ghUser) => {
        const userProfile = await this.client.getUser(ghUser.login);
        return {
          name: userProfile.name,
          id: userProfile.id,
          username: userProfile.login,
          avatar: userProfile.avatar_url,
          location: userProfile.location,
          type: SearchResultType.User,
        };
      })
    );
    return {
      items: [...searchResultRepositories, ...searchResultUsers]
        .sort((left, right) => (left.id > right.id ? -1 : 1))
        .slice(0, 10),
      metadata: {
        totalCount: githubRepositories.total_count + githubUsers.total_count,
        ...params,
      },
    };
  }
}
