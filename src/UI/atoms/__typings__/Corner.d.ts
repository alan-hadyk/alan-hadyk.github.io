export interface CornerProps {
  isActive?: boolean;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export interface CornerContainerProps {
  left: 0 | "100%" | "-8px" | "calc(100% - 8px)";
  opacity?: 0.5 | 1;
  top: 0 | "100%" | "-8px" | "calc(100% - 8px)";
  transform: "rotate(0)" | "rotate(90deg)" | "rotate(270deg)" | "rotate(180deg)";
}

export interface MapPositionToCornerProps {
  bottomLeft: CornerContainerProps;
  bottomRight: CornerContainerProps;
  topLeft: CornerContainerProps;
  topRight: CornerContainerProps;
}

