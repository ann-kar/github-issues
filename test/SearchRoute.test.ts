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
              "avatar": "https://avatars.githubusercontent.com/u/86507453?v=4",
              "id": 86507453,
              "location": null,
              "name": null,
              "type": "User",
              "username": "110953",
            },
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
              "description": ":scissors: A grunt task for removing unused CSS from your projects.",
              "id": 12821113,
              "name": "grunt-uncss",
              "starsCount": 3860,
              "type": "Repository",
              "updatedAt": "2022-03-03T17:15:25Z",
            },
            Object {
              "description": "Responsive images while we wait for srcset to finish cooking",
              "id": 11944782,
              "name": "Imager.js",
              "starsCount": 3848,
              "type": "Repository",
              "updatedAt": "2022-02-28T20:49:06Z",
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
              "description": "CLI for Building & Distributing iOS Apps (.ipa Files)",
              "id": 5992293,
              "name": "shenzhen",
              "starsCount": 4659,
              "type": "Repository",
              "updatedAt": "2022-03-03T19:50:35Z",
            },
            Object {
              "description": "Accelerated panning and zooming for HTML and Canvas",
              "id": 2377206,
              "name": "scroller",
              "starsCount": 3831,
              "type": "Repository",
              "updatedAt": "2022-03-04T19:41:02Z",
            },
          ],
          "metadata": Object {
            "page": 1,
            "perPage": 10,
            "totalCount": 10,
          },
        }
      `);
    });
  });
});
