import { IThemeClasses } from "types/theme";

export interface IImageStaticProps {
  alt?: string;
  id?: string;
  src: string;
  themeClasses?: IThemeClasses;
}
