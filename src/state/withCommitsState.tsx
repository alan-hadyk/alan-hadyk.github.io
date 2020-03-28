import React, { useState, useEffect } from "react";

import fetch, { Response } from "node-fetch";

import {
  CommitProps
} from "<molecules>/__typings__/Commit.d.ts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withCommitsState = (WrappedComponent: React.FunctionComponent<any>) => (props: unknown): JSX.Element => {
  const [commitsList, setCommitsList] = useState<[] | CommitProps[]>([]);
  const [hasError, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchCommits();
  }, [hasError]);

  return (
    <WrappedComponent commitsList={commitsList} hasError={hasError} {...props} />
  );

  async function fetchCommits(): Promise<void> {
    try {
      const data: Response = await fetch("https://api.github.com/repos/alan-hadyk/portfolio/commits");
      const json: CommitProps[] = await data.json();

      setCommitsList(json);
      setError(false);
    } catch(err) {
      setError(true);
    }
  }
};

export default withCommitsState;