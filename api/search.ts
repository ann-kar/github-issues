import { ISearch, ISearchRequest, ISearchResponse } from "../interfaces/search";

export class Search implements ISearch {
  async search(request: ISearchRequest): Promise<ISearchResponse> {
    const response = await fetch(
      "http://localhost:3000/api/search?" +
        new URLSearchParams({
          query: request.query || "",
        })
    );
    return await response.json();
  }
}
