import { withRecording } from "./utils/withRecording";
import { GithubClient } from "../api/GithubClient";

describe("#getUsers", function () {
  test("returns github users with correct perPage", async () => {
    return withRecording(__dirname, "users", async () => {
      await expect(
        new GithubClient().getUsers({ perPage: 10, page: 1 })
      ).resolves.toMatchSnapshot();
    });
  });

  test("returns github users with correct page", async () => {
    return withRecording(__dirname, "users second page", async () => {
      await expect(
        new GithubClient().getUsers({ perPage: 10, page: 2 })
      ).resolves.toMatchSnapshot();
    });
  });
});
