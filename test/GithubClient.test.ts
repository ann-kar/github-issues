import { expect } from "@jest/globals";
import { GithubUser } from "../interfaces/github";

class GithubClient {
  async getUsers(): Promise<GithubUser[]> {
    return [];
  }
}

describe("#getUsers", function () {
  test("returns github users", async () => {
    await expect(new GithubClient().getUsers()).resolves.toEqual([]);
  });
});
