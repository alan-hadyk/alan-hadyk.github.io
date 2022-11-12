/* eslint-disable @typescript-eslint/no-explicit-any */

import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { ICompanyProps } from "components/organisms/Company/@types/Company";

interface OnRenderProps {
  blob?: Blob;
}

export type PDFVersion = "1.3" | "1.4" | "1.5" | "1.6" | "1.7" | "1.7ext3";

export interface IPDFProps {
  document: {
    author?: string;
    children?: React.ReactNode;
    creator?: string;
    keywords?: string;
    language?: string;
    onRender?: (props: OnRenderProps) => any;
    pdfVersion?: PDFVersion;
    producer?: string;
    subject?: string;
    title?: string;
  };
  experience?: ICompanyProps[];
  sidebarInfo?: {
    iconName: "pin" | "envelope" | "globe" | "linkedIn" | "github";
    link?: string;
    text: string;
  }[];
  skills?: {
    iconsWithLabels: IIconWithLabelProps[];
    title?: string;
  }[];
}
