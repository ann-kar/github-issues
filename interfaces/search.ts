export enum SearchResultType {
  User = "User",
  Repository = "Repository",
}

export interface IRepository {
  name: string;
  description: string;
  updatedAt: Date;
  starsCount: number;
  dominantLanguage?: string;
  licence?: string;
  id: number;
  type: SearchResultType.Repository;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  avatar: string;
  location: string;
  type: SearchResultType.User;
}

export interface ISearchResponse {
  items: Array<IRepository | IUser>;
  metadata: {
    totalCount: number;
    page: number;
    perPage: number;
  };
}

export interface ISearchRequest {
  query?: string;
  page?: number;
  perPage?: number;
}

export interface ISearch {
  search(request: ISearchRequest): Promise<ISearchResponse>;
  user(request: IUserRequest): Promise<IUserResponse>;
}

export interface IUserRequest {
  userId: number
}

export interface IUserResponse {
  userId: number,
  avatar: string,
  displayName: string,
  username: string,
  followers: number,
  following: number,
  starsCount: number,
}
