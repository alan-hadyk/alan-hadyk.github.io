import { CSSProperties } from "react";
import { IThemeClasses } from "@app/types/theme";

export interface IImageStaticProps {
  alt?: string;
  id?: string;
  src: string;
  style?: CSSProperties;
  themeClasses?: IThemeClasses;
}
