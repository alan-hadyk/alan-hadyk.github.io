import { TLeft, TTop } from "types/theme";

export interface ICornerProps {
  isActive?: boolean;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export interface ICornerContainerProps {
  left: TLeft;
  opacity?: "opacity-50" | "opacity-100";
  top: TTop;
  transform: "rotate-0" | "rotate-90" | "rotate-[270deg]" | "rotate-180";
}

export interface IMapPositionToCornerProps {
  bottomLeft: ICornerContainerProps;
  bottomRight: ICornerContainerProps;
  topLeft: ICornerContainerProps;
  topRight: ICornerContainerProps;
}
