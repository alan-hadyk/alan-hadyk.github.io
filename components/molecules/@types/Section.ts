import { ITypographyProps } from "components/atoms/@types/Typography";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TSpacingValues } from "types/theme";
import { TChildren } from "types/props";

export interface ISectionProps {
  children: TChildren;
  id: string;
  marginBottom?: ILayoutContainerProps["marginBottom"];
  minHeight?: `min-h-${TSpacingValues}`;
  title?: string;
}

export interface IRenderTitle {
  fontSize: ITypographyProps["fontSize"];
  marginBottom: ILayoutContainerProps["marginBottom"];
}
