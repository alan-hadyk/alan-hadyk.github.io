import { PDFTemplate } from "components/templates/PDFTemplate";
import { IPdfLayoutProps } from "layouts/@types/PdfLayout";
import React from "react";

const PdfLayout: React.FC<IPdfLayoutProps> = ({ children }) =>
  children ? <PDFTemplate>{children}</PDFTemplate> : null;

export { PdfLayout };
