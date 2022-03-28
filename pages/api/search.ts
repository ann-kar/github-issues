import { NextApiRequest, NextApiResponse } from "next";
import { GithubFacade } from "../../facades/GithubFacade";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await new GithubFacade().search({
    query: "",
    perPage: 10,
    page: 1,
  });
  res.status(200).json(data);
}
