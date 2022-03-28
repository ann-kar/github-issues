export interface IRepository {
  name: string;
  description: string;
  updatedAt: Date;
  starsCount: number;
  dominantLanguage?: string;
  licence?: string;
  id: number;
}

export interface ISearchResponse {
  items: Array<IRepository>;
  metadata: {
    totalCount: number;
    page: number;
    perPage: number;
  };
}

export interface ISearchRequest {}

export interface ISearch {
  search(request: ISearchRequest): Promise<ISearchResponse>;
}
