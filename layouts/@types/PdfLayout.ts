import { IPdfTemplateProps } from "components/templates/PdfTemplate/@types/PdfTemplate";
import { ReactNode } from "react";

export interface IPdfLayoutProps {
  children: ReactNode;
  sidebar: IPdfTemplateProps["sidebar"];
  title: string;
}
