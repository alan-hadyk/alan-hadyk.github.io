export interface IListOfCommitsProps {
  commitsList: Array<ICommitProps | undefined | null>;
  commitsState: "error" | "idle" | "loaded" | "loading";
}

export interface ICommitProps {
  commit?: {
    author?: {
      date?: string;
    };
  } | null;
  html_url?: string | null;
  sha?: string | null;
}
