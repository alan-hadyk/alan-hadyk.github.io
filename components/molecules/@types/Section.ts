import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TSpacingValues, TTextFontSize } from "types/theme";
import { TChildren } from "types/props";

export interface ISectionProps {
  children: TChildren;
  id: string;
  marginBottom?: ILayoutContainerProps["marginBottom"];
  minHeight?: `min-h-${TSpacingValues}`;
  title?: string;
}

export interface IRenderTitle {
  fontSize: TTextFontSize;
  marginBottom: ILayoutContainerProps["marginBottom"];
}
