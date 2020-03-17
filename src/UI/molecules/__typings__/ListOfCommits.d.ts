
export interface ListOfCommitsProps {
  commitsList: CommitProps[];
}

export interface CommitProps {
  commit: {
    author: {
      date: string;
    };
  };
  // eslint-disable-next-line @typescript-eslint/camelcase
  html_url: string;
  sha: string;
}
