export interface CrossProps {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export interface CrossContainerProps {
  alignSelf?: "flex-end";
  flex: "50%";
  textAlign?: "right";
}

export interface MapPositionToCrossProps {
  bottomLeft: CrossContainerProps;
  bottomRight: CrossContainerProps;
  topLeft: CrossContainerProps;
  topRight: CrossContainerProps;
}