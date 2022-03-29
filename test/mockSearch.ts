import {
  ISearch,
  ISearchRequest,
  ISearchResponse,
  IRepository,
  IUserSearchRequest,
  IUserSearchResponse,
  SearchResultType,
} from "../interfaces/search";

export class MockSearch implements ISearch {
  async userSearch(request: IUserSearchRequest): Promise<IUserSearchResponse> {
    return {
      userId: 4231133,
      avatar: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
      displayName: "Anna Karpiuk",
      username: 'annkar',
      followers: 23,
      following: 34,
      starsCount: 1,
    }
  }
  async search(request: ISearchRequest): Promise<ISearchResponse> {
    return {
      items: this.generateItems(),
      metadata: {
        totalCount: 10,
        page: 1,
        perPage: 10,
      },
    };
  }

  private generateItems(): IRepository[] {
    return [...Array(10)].map((_i, index) => generateItem(index));
    function generateItem(index: number): IRepository {
      return {
        name: `sampleRepository ${index}`,
        description: `description ${index}`,
        updatedAt: new Date(),
        starsCount: index,
        dominantLanguage: `TypeScript ${index}`,
        licence: `MIT ${index}`,
        id: index,
        type: SearchResultType.Repository
      };
    }
  }
}
