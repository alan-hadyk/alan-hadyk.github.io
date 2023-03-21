import {
  CornerPosition,
  ICornerProps
} from "components/atoms/Corner/@types/Corner";

export const cornersPositions: Pick<ICornerProps, "position">[] = [
  {
    position: CornerPosition.TopLeft
  },
  {
    position: CornerPosition.TopRight
  },
  {
    position: CornerPosition.BottomLeft
  },
  {
    position: CornerPosition.BottomRight
  }
];
