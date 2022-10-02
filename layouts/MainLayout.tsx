import { PageTemplate } from "components/templates/PageTemplate";
import { IMainLayoutProps } from "layouts/@types/MainLayout";
import Head from "next/head";
import React from "react";

const MainLayout: React.FC<IMainLayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {children && <PageTemplate as="main">{children}</PageTemplate>}
  </>
);

export { MainLayout };
