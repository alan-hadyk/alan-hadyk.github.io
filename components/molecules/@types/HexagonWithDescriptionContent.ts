import { ITypographyProps } from "components/atoms/@types/Typography";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren } from "types/props";

export interface IHexagonWithDescriptionContentProps {
  children: TChildren;
  description: ITypographyProps["children"];
  flexFlow?: ILayoutContainerProps["flexFlow"];
  lineHeight?: ITypographyProps["lineHeight"];
  marginBottom?: ILayoutContainerProps["marginBottom"];
  marginRight?: ILayoutContainerProps["marginRight"];
  textWidth?: ITypographyProps["width"];
  width?: ILayoutContainerProps["width"];
}
