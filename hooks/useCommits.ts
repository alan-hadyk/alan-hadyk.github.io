import { useEffect, useState } from "react";

import { fetchCommits } from "api/fetchCommits";
import { ICommitProps } from "components/molecules/@types/ListOfCommits";
import { TCommitsState } from "hooks/@types/useCommits";

const useCommits = () => {
  const [commitsList, setCommitsList] = useState<ICommitProps[]>([]);
  const [commitsState, setCommitsState] = useState<TCommitsState>("idle");

  const getCommits = async () => {
    setCommitsState("loading");

    try {
      const commits = await fetchCommits();

      if (!(commits instanceof Error)) {
        setCommitsList(commits);
        setCommitsState("loaded");
      } else {
        setCommitsState("error");
      }
    } catch (error) {
      setCommitsState("error");
    }
  };

  useEffect(() => {
    getCommits();
  }, []);

  return {
    commitsList,
    commitsState
  };
};

export { useCommits };
