import { createMocks } from "node-mocks-http";
import SearchRoute from "../pages/api/search";
import { withRecording } from "./utils/withRecording";

describe("SearchRoute", () => {
  test("returns status 200", async () => {
    return withRecording(__dirname, "e2e search", async () => {
      const { req, res } = createMocks();
      await SearchRoute(req, res);
      expect(res.statusCode).toBe(200);
    });
  });

  test("returns correct structures", async () => {
    return withRecording(__dirname, "e2e search", async () => {
      const { req, res } = createMocks();
      await SearchRoute(req, res);
      expect(res._getJSONData()).toMatchInlineSnapshot(`
        Object {
          "items": Array [
            Object {
              "description": "Mobile App Framework powered by React",
              "id": 25205606,
              "name": "touchstonejs",
              "starsCount": 3350,
              "type": "Repository",
              "updatedAt": "2022-03-04T14:44:45Z",
            },
            Object {
              "description": "A tiny, lightning fast jQuery-like library for modern browsers.",
              "id": 23384104,
              "name": "sprint",
              "starsCount": 4283,
              "type": "Repository",
              "updatedAt": "2022-03-03T20:08:10Z",
            },
            Object {
              "description": "Yeoman generator for AngularJS with GulpJS [UNMAINTAINED next iteration is FountainJS]",
              "id": 19238853,
              "name": "generator-gulp-angular",
              "starsCount": 3755,
              "type": "Repository",
              "updatedAt": "2022-03-03T17:15:34Z",
            },
            Object {
              "description": "A next-generation package manager for the front-end",
              "id": 18609451,
              "name": "duo",
              "starsCount": 3459,
              "type": "Repository",
              "updatedAt": "2022-03-04T14:44:43Z",
            },
            Object {
              "description": ":scissors: A grunt task for removing unused CSS from your projects.",
              "id": 12821113,
              "name": "grunt-uncss",
              "starsCount": 3860,
              "type": "Repository",
              "updatedAt": "2022-03-03T17:15:25Z",
            },
            Object {
              "description": "Simple and Powerful ORM for Go, support mysql,postgres,tidb,sqlite3,mssql,oracle, Moved to https://gitea.com/xorm/xorm",
              "id": 9950667,
              "name": "xorm",
              "starsCount": 6496,
              "type": "Repository",
              "updatedAt": "2022-03-23T21:05:56Z",
            },
            Object {
              "description": "An extensible open-source mobile backend framework",
              "id": 9175924,
              "name": "helios",
              "starsCount": 4156,
              "type": "Repository",
              "updatedAt": "2022-02-24T00:29:44Z",
            },
            Object {
              "avatar": "https://avatars.githubusercontent.com/u/8683378?v=4",
              "id": 8683378,
              "location": "Rio de Janeiro, Brazil",
              "name": "Gustavo Guanabara",
              "type": "User",
              "username": "gustavoguanabara",
            },
            Object {
              "description": "CLI for Building & Distributing iOS Apps (.ipa Files)",
              "id": 5992293,
              "name": "shenzhen",
              "starsCount": 4659,
              "type": "Repository",
              "updatedAt": "2022-03-03T19:50:35Z",
            },
            Object {
              "avatar": "https://avatars.githubusercontent.com/u/5550850?v=4",
              "id": 5550850,
              "location": "Massachusetts",
              "name": "Brad Traversy",
              "type": "User",
              "username": "bradtraversy",
            },
          ],
          "metadata": Object {
            "page": 1,
            "perPage": 10,
            "query": "",
            "totalCount": 110363681,
          },
        }
      `);
    });
  });

  test("returns correct structures when passing query params", async () => {
    return withRecording(__dirname, "e2e search with query", async () => {
      const { req, res } = createMocks({ query: { query: "michalwarda" } });
      await SearchRoute(req, res);
      expect(res._getJSONData()).toMatchInlineSnapshot(`
        Object {
          "items": Array [
            Object {
              "description": null,
              "id": 467084925,
              "name": "michalwarda-task2",
              "starsCount": 0,
              "type": "Repository",
              "updatedAt": "2022-03-07T12:32:10Z",
            },
            Object {
              "description": null,
              "id": 463940451,
              "name": "michalwarda-task1",
              "starsCount": 0,
              "type": "Repository",
              "updatedAt": "2022-02-26T18:58:55Z",
            },
            Object {
              "avatar": "https://avatars.githubusercontent.com/u/78908285?v=4",
              "id": 78908285,
              "location": null,
              "name": null,
              "type": "User",
              "username": "michalwarda15",
            },
            Object {
              "avatar": "https://avatars.githubusercontent.com/u/8479334?v=4",
              "id": 8479334,
              "location": "Warsaw, Poland",
              "name": "Michał Warda",
              "type": "User",
              "username": "michalwarda",
            },
          ],
          "metadata": Object {
            "page": 1,
            "perPage": 10,
            "query": "michalwarda",
            "totalCount": 4,
          },
        }
      `);
    });
  });
});
