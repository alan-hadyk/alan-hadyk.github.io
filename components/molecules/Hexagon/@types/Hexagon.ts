import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export enum HexagonFill {
  None,
  Solid,
  Pattern
}

export interface IHexagonProps {
  children?: TChildren;
  fill?: HexagonFill;
  themeClasses?: { children?: Pick<IThemeClasses, "width"> };
}

export type TIconDimensionsProps = Pick<IThemeClasses, "height" | "width">;

export type TGetHexagonImagePropsArgs = Pick<IHexagonProps, "fill"> & {
  iconDimensions: TIconDimensionsProps;
};
