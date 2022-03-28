import { createMocks } from "node-mocks-http";
import SearchRoute from "../pages/api/search";

describe("SearchRoute", () => {
  test("returns status 200", async () => {
    const { req, res } = createMocks();
    SearchRoute(req, res);
    expect(res.statusCode).toBe(200);
  });
});
