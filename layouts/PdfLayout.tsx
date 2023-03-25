import { PdfTemplate } from "components/templates/PdfTemplate/PdfTemplate";
import { IPdfLayoutProps } from "layouts/@types/PdfLayout";
import React from "react";
import Head from "next/head";

const PdfLayout: React.FC<IPdfLayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children ? <PdfTemplate>{children}</PdfTemplate> : null}
  </>
);
export { PdfLayout };
