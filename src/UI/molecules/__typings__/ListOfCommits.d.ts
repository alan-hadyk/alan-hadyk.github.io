
export interface ListOfCommitsProps {
  commitsList: CommitProps[];
  device?: "desktop" | "tablet";
  hasError: boolean;
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
