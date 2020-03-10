import {
  Spacing
} from "<styles>/variables/__typings__/variables";

export interface FlexContainerProps {
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  children: JSX.Element | JSX.Element[];
  dataTestId?: string;
  flexFlow?: "row wrap" | "row nowrap" | "column wrap" | "column nowrap";
  gap?: Spacing;
  height?: Spacing | "unset" | "50%" | "100%";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between"; 
}
