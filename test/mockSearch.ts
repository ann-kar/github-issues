import {
  ISearch,
  ISearchRequest,
  ISearchResponse,
  IRepository,
} from "../interfaces/search";

export class MockSearch implements ISearch {
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
      };
    }
  }
}
