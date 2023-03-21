import { CSSProperties } from "react";
import { IThemeClasses } from "types/theme";

export interface IImageStaticProps {
  alt?: string;
  id?: string;
  src: string;
  style?: CSSProperties;
  themeClasses?: IThemeClasses;
}
