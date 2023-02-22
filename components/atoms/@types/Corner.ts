import { TLeft, TOpacity, TRotate, TTop } from "types/theme";

export interface ICornerProps {
  isActive?: boolean;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  variant?: CornerVariant;
}

export interface ICornerContainerProps {
  left: TLeft;
  opacity?: TOpacity;
  rotate: TRotate;
  top: TTop;
}

export interface IMapPositionToCornerProps {
  bottomLeft: ICornerContainerProps;
  bottomRight: ICornerContainerProps;
  topLeft: ICornerContainerProps;
  topRight: ICornerContainerProps;
}

export enum CornerVariant {
  Dark,
  Light
}
