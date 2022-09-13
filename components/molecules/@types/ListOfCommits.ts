import { TCommitsState } from "hooks/@types/useCommits";

export interface IListOfCommitsProps {
  commitsList: Array<ICommitProps | undefined | null>;
  commitsState: TCommitsState;
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
