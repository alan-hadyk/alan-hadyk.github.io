import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface IHexagonProps {
  children?: TChildren;
  contentWidth?: ILayoutContainerProps["width"];
  dataCy?: string;
  fill?: "none" | "solid" | "pattern";
}

export type TIconDimensionsProps = Pick<IThemeClasses, "height" | "width">;
