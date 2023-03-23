import { PdfTemplate } from "components/templates/PdfTemplate";
import { IPdfLayoutProps } from "layouts/@types/PdfLayout";
import React from "react";
import Head from "next/head";

const PdfLayout: React.FC<IPdfLayoutProps> = ({ children, sidebar, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children ? <PdfTemplate sidebar={sidebar}>{children}</PdfTemplate> : null}
  </>
);
export { PdfLayout };
