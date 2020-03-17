import {
  Spacing,
  ZIndex
} from "<styles>/variables/__typings__/variables";

export interface PositionContainerProps {
  bottom?: Spacing | "unset" | "50%" | "100%";
  children: JSX.Element | JSX.Element[];
  dataTestId?: string;
  height?: Spacing | "unset" | "50%" | "100%" | "22.6vh";
  left?: Spacing | "unset" | "50%" | "100%";
  position?: "static" | "relative" | "fixed" | "sticky" | "absolute";
  right?: Spacing | "unset" | "50%" | "100%";
  top?: Spacing | "unset" | "50%" | "100%";
  transform?: string;
  zIndex?: ZIndex;
}
