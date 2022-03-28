import { withRecording } from "./utils/withRecording";
import { GithubClient } from "../api/GithubClient";

describe("GithubClient", () => {
  describe("#getUsers", () => {
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

  describe("#getRepositories", function () {
    test("returns github repositories with correct perPage", async () => {
      return withRecording(__dirname, "repositories", async () => {
        await expect(
          new GithubClient().getRepositories({ perPage: 10, page: 1 })
        ).resolves.toMatchSnapshot();
      });
    });

    test("returns github users with correct page", async () => {
      return withRecording(__dirname, "repositories second page", async () => {
        await expect(
          new GithubClient().getUsers({ perPage: 10, page: 2 })
        ).resolves.toMatchSnapshot();
      });
    });
  });

  describe("#getUser", function () {
    test("returns github user with specified name", async () => {
      return withRecording(__dirname, "user", async () => {
        await expect(
          new GithubClient().getUser("michalwarda")
        ).resolves.toMatchSnapshot();
      });
    });
  });

  describe("#getRepository", function () {
    test("returns github repository with specified name and organization", async () => {
      return withRecording(__dirname, "repository", async () => {
        await expect(
          new GithubClient().getRepository("facebook", "react")
        ).resolves.toMatchSnapshot();
      });
    });
  });
});
