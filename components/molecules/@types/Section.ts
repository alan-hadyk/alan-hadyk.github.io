import { IThemeClasses, TSpacingValues, TTextFontSize } from "types/theme";
import { TChildren } from "types/props";

export interface ISectionProps {
  children: TChildren;
  id: string;
  marginBottom?: IThemeClasses["marginBottom"];
  minHeight?: `min-h-${TSpacingValues}`;
  title?: string;
}

export interface IRenderTitle {
  fontSize: TTextFontSize;
  marginBottom: IThemeClasses["marginBottom"];
}
