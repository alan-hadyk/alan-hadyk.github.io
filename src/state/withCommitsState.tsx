import React, { useState, useEffect } from "react";

import fetch, { Response } from "node-fetch";

import { CommitProps } from "UI/molecules/__typings__/Commit";
import { ComponentWithCommitsType } from "state/__typings__/withCommitsState";

const withCommitsState = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  WrappedComponent: React.FunctionComponent<any>
): ComponentWithCommitsType => {
  const ComponentWithCommits = (props: unknown): JSX.Element => {
    const [commitsList, setCommitsList] = useState<CommitProps[]>([]);
    const [hasError, setError] = useState<boolean>(false);

    useEffect(() => {
      fetchCommits();
    }, [hasError]);

    return (
      <WrappedComponent
        commitsList={commitsList}
        hasError={hasError}
        {...props}
      />
    );

    async function fetchCommits(): Promise<void> {
      try {
        const data: Response = await fetch(
          "https://api.github.com/repos/alan-hadyk/portfolio/commits"
        );

        console.log("data", data);
        const json: CommitProps[] = await data.json();

        if (!data.ok || !Array.isArray(json)) {
          setCommitsList([]);
          setError(true);
        } else {
          setCommitsList(json);
          setError(false);
        }
      } catch (err) {
        setCommitsList([]);
        setError(true);
      }
    }
  };

  return ComponentWithCommits;
};

export default withCommitsState;
