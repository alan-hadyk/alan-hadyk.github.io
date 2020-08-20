import { DeviceProps } from "<layout>/__typings__/Responsive";

export interface ListOfCommitsProps {
  commitsList: CommitProps[];
  device?: DeviceProps["device"];
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
