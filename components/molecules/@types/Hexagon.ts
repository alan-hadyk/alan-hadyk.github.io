import { IIconProps } from "components/atoms/@types/Icon";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { Ref } from "react";
import { TChildren } from "types/props";

export interface IHexagonProps {
  children?: TChildren;
  contentWidth?: ILayoutContainerProps["width"];
  dataCy?: string;
  dataTestId?: string;
  fill?: "none" | "solid" | "pattern";
}

export interface IIconDimensionsProps {
  height?: IIconProps["height"];
  width?: IIconProps["width"];
}

export interface IRenderIconArgs {
  fill: IHexagonProps["fill"];
  iconDimensions: IIconDimensionsProps;
  iconRef: Ref<SVGSVGElement>;
}
