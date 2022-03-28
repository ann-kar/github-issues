import { ISearch, ISearchRequest, ISearchResponse } from "../interfaces/search";

export class Search implements ISearch {
  async search(request: ISearchRequest): Promise<ISearchResponse> {
    throw new Error("Method not implemented.");
  }
}
