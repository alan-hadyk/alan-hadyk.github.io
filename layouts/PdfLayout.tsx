import { PDFTemplate } from "components/templates/PDFTemplate";
import { IPdfLayoutProps } from "layouts/@types/PdfLayout";
import React from "react";
import Head from "next/head";

const PdfLayout: React.FC<IPdfLayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children ? <PDFTemplate>{children}</PDFTemplate> : null}
  </>
);
export { PdfLayout };
