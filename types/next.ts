import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type GetLayout = (page: ReactNode) => ReactElement<unknown, string> | null;

export type TNextPageWithLayout = NextPage<unknown> & {
  getLayout: GetLayout;
};

export type TAppPropsWithComponent = AppProps & {
  Component: TNextPageWithLayout;
};
