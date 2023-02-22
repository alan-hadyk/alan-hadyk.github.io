import { PageTemplate } from "components/templates/PageTemplate";
import { IWebLayoutProps } from "layouts/@types/WebLayout";
import Head from "next/head";
import React from "react";

const WebLayout: React.FC<IWebLayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {children && <PageTemplate as="main">{children}</PageTemplate>}
  </>
);

export { WebLayout };
