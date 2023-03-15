import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface IHexagonProps {
  children?: TChildren;
  contentWidth?: ILayoutContainerProps["width"];
  fill?: "none" | "solid" | "pattern";
}

export type TIconDimensionsProps = Pick<IThemeClasses, "height" | "width">;
