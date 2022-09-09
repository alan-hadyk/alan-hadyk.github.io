import fetch, { Response } from "node-fetch";

import { ICommitProps } from "components/molecules/@types/Commit";

async function fetchCommits(): Promise<ICommitProps[] | Error> {
  const commits: Response = await fetch(
    "https://api.github.com/repos/alan-hadyk/portfolio/commits"
  );

  const commitsJson = await commits.json();

  if (!commits.ok || !Array.isArray(commitsJson)) {
    throw new Error(JSON.stringify(commitsJson));
  } else {
    return commitsJson;
  }
}

export { fetchCommits };
