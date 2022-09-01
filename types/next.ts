import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type GetLayout = (page: ReactNode) => ReactElement<unknown, string> | null;

export type IPageProps = unknown;

export type TNextPageWithLayout = NextPage<IPageProps> & {
  getLayout: GetLayout;
};

export type TAppPropsWithComponent = AppProps & {
  Component: TNextPageWithLayout;
};

export interface IAppPropsWithApolloState extends AppProps {
  pageProps: IPageProps;
}
