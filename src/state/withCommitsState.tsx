import React, { useState, useEffect } from "react";

import fetch from "node-fetch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withCommitsState = (WrappedComponent: React.FunctionComponent<any>) => (props: unknown): JSX.Element => {
  const [commitsList, setCommitsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <WrappedComponent commitsList={commitsList} {...props} />
  );

  async function fetchCommits() {
    try {
      const data = await fetch("https://api.github.com/repos/alan-hadyk/portfolio/commits");
      const json = await data.json();

      setCommitsList(json);
    } catch(err) {
      setError(err); //TODO change view on error
    }
  }  
};

export default withCommitsState;