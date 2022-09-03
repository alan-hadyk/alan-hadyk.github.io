export interface ICornerProps {
  isActive?: boolean;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export interface ICornerContainerProps {
  left: "left-0" | "left-full" | "left[-8px]" | "left-[calc(100% - 8px)]";
  opacity?: "opacity-50" | "opacity-100";
  top: "top-0" | "top-full" | "top-[-8px]" | "top-[calc(100% - 8px)]";
  transform: "rotate-0" | "rotate-90" | "rotate-270" | "rotate-180";
}

export interface MapPositionToCornerProps {
  bottomLeft: ICornerContainerProps;
  bottomRight: ICornerContainerProps;
  topLeft: ICornerContainerProps;
  topRight: ICornerContainerProps;
}
