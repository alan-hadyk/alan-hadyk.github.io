import React, { useState, useEffect } from "react";

import fetch from "node-fetch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withCommitsState = (WrappedComponent: React.FunctionComponent<any>) => (props: unknown): JSX.Element => {
  const [commitsList, setCommitsList] = useState([]);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <WrappedComponent commitsList={commitsList} hasError={hasError} {...props} />
  );

  async function fetchCommits(): Promise<any> {
    try {
      const data = await fetch("https://api.github.com/repos/alan-hadyk/portfolio/commits");
      const json = await data.json();

      setCommitsList(json);
      setError(false);
    } catch(err) {
      setError(true);
    }
  }  
};

export default withCommitsState;