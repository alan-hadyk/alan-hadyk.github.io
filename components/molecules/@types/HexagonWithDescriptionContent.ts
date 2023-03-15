import { ITypographyProps } from "components/atoms/Typography/@types/Typography";
import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { TChildren } from "types/props";
import { TLeading, TWidth } from "types/theme";

export interface IHexagonWithDescriptionContentProps {
  children: TChildren;
  description: ITypographyProps["children"];
  flexFlow?: ILayoutContainerProps["flexFlow"];
  lineHeight?: TLeading;
  marginBottom?: ILayoutContainerProps["marginBottom"];
  marginRight?: ILayoutContainerProps["marginRight"];
  textWidth?: TWidth;
  width?: ILayoutContainerProps["width"];
}
