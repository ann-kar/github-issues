import fetch from "node-fetch";
import { GithubUser } from "../interfaces/github";
import { withRecording } from "./withRecording";

class GithubClient {
  async getUsers(): Promise<GithubUser[]> {
    const response = await fetch("https://api.github.com/users");
    return (await response.json()) as GithubUser[];
  }
}

describe("#getUsers", function () {
  test("returns github users", async () => {
    return withRecording(__dirname, "users", async () => {
      await expect(new GithubClient().getUsers()).resolves.toMatchSnapshot();
    });
  });
});
