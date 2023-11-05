import { IThemeClasses } from "@app/types/theme";

interface ICornerContainerProps {
  left: IThemeClasses["left"];
  opacity?: IThemeClasses["opacity"];
  rotate: IThemeClasses["rotate"];
  top: IThemeClasses["top"];
}

export enum CornerPosition {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
}

export interface ICornerProps {
  isActive?: boolean;
  position: CornerPosition;
}
export type TMapPositionToCornerProps = Record<
  CornerPosition,
  ICornerContainerProps
>;
