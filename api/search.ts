import {
  ISearch,
  ISearchRequest,
  ISearchResponse,
  IUserRequest,
  IUserResponse,
} from "../interfaces/search";

export class Search implements ISearch {
  async search(request: ISearchRequest): Promise<ISearchResponse> {
    const response = await fetch(
      "http://localhost:3000/api/search?" +
        new URLSearchParams({
          query: request.query || "",
          page: request.page?.toString() || "",
          perPage: request.perPage?.toString() || "",
        })
    );
    return await response.json();
  }
  async user(request: IUserRequest): Promise<IUserResponse> {
    throw new Error("Method not implemented.");
  }
}
