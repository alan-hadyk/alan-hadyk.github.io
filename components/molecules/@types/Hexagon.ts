import { IIconProps } from "components/atoms/@types/Icon";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren } from "types/props";

export interface IHexagonProps {
  children?: TChildren;
  contentWidth?: ILayoutContainerProps["width"];
  dataCy?: string;
  fill?: "none" | "solid" | "pattern";
}

export interface IIconDimensionsProps {
  height?: IIconProps["height"];
  width?: IIconProps["width"];
}
