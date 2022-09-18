import { ITextProps } from "components/atoms/@types/Text";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren } from "types/props";

export interface IHexagonWithDescriptionContentProps {
  children: TChildren;
  description: ITextProps["children"];
  flexFlow?: ILayoutContainerProps["flexFlow"];
  lineHeight?: ITextProps["lineHeight"];
  marginBottom?: ILayoutContainerProps["marginBottom"];
  marginRight?: ILayoutContainerProps["marginRight"];
  textWidth?: ITextProps["width"];
  width?: ILayoutContainerProps["width"];
}
