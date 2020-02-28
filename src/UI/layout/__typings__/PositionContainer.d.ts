import {
  Spacing,
  ZIndex
} from "<styles>/variables/__typings__/variables";

export interface PositionContainerProps {
  bottom?: Spacing | "unset";
  children: JSX.Element | JSX.Element[];
  height?: Spacing | "unset" | "50%" | "100%";
  left?: Spacing | "unset";
  position?: "static" | "relative" | "fixed" | "sticky";
  right?: Spacing | "unset";
  top?: Spacing | "unset";
  zIndex?: ZIndex;
}
