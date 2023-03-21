import { IThemeClasses } from "types/theme";

export enum CornerPosition {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight
}

export enum CornerVariant {
  Dark,
  Light
}

export interface ICornerProps {
  isActive?: boolean;
  position: CornerPosition;
  variant?: CornerVariant;
}

export interface ICornerContainerProps {
  left: IThemeClasses["left"];
  opacity?: IThemeClasses["opacity"];
  rotate: IThemeClasses["rotate"];
  top: IThemeClasses["top"];
}

export type TMapPositionToCornerProps = Record<
  CornerPosition,
  ICornerContainerProps
>;
