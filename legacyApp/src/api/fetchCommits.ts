import fetch, { Response } from "node-fetch";

import { CommitProps } from "UI/molecules/__typings__/Commit";

async function fetchCommits(): Promise<CommitProps[] | Error> {
  const commits: Response = await fetch(
    "https://api.github.com/repos/alan-hadyk/portfolio/commits"
  );

  const commitsJson: Record<string, unknown> = await commits.json();

  if (!commits.ok || !Array.isArray(commitsJson)) {
    throw new Error(JSON.stringify(commitsJson));
  } else {
    return commitsJson;
  }
}

export default fetchCommits;
