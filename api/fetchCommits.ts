import { ICommitProps } from "components/molecules/@types/ListOfCommits";
import fetch, { Response } from "node-fetch";

async function fetchCommits(): Promise<ICommitProps[] | Error> {
  const response: Response = await fetch(
    "https://api.github.com/repos/alan-hadyk/portfolio/commits"
  );

  const responseAsJson = await response.json();

  if (!response.ok || !Array.isArray(responseAsJson)) {
    throw new Error(JSON.stringify(responseAsJson));
  } else {
    return responseAsJson as ICommitProps[];
  }
}

export { fetchCommits };
