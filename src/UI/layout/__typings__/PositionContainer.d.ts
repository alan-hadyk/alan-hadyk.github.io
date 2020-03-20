import {
  Spacing,
  ZIndex
} from "<styles>/variables/__typings__/variables.d.ts";

export interface PositionContainerProps {
  bottom?: Spacing | "unset" | "50%" | "100%";
  children: JSX.Element | JSX.Element[];
  dataTestId?: string;
  height?: Spacing | string;
  left?: Spacing | "unset" | "50%" | "100%";
  position?: "static" | "relative" | "fixed" | "sticky" | "absolute";
  right?: Spacing | "unset" | "50%" | "100%";
  top?: Spacing | "unset" | "50%" | "100%";
  transform?: string;
  width?: string | Spacing;
  zIndex?: ZIndex;
}
