export interface ListOfCommitsProps {
  commitsList: CommitProps[];
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
