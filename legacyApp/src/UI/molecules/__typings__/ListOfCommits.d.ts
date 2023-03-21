export interface ListOfCommitsProps {
  commitsList: CommitProps[];
  commitsState: "error" | "idle" | "loaded" | "loading";
}

export interface CommitProps {
  commit: {
    author: {
      date: string;
    };
  };
  html_url: string;
  sha: string;
}
