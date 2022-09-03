export enum LineDirection {
  LEFT = "left",
  RIGHT = "right"
}

export interface ILineProps {
  direction: LineDirection;
  isActive?: boolean;
}
