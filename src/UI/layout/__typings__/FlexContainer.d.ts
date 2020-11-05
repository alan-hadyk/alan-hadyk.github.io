import { Spacing } from "styles/variables/__typings__/variables";

export interface FlexContainerProps {
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  children: JSX.Element | JSX.Element[];
  dataCy?: string;
  dataTestId?: string;
  flexFlow?: "row wrap" | "row nowrap" | "column wrap" | "column nowrap";
  gap?: Spacing | string;
  height?: Spacing | "unset" | "50%" | "100%";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
  margin?: Spacing | string;
  maxWidth?: Spacing | "unset" | "100%";
}

export interface CalculateGap {
  flexFlow: FlexContainerProps["flexFlow"];
  gap: FlexContainerProps["gap"];
  shouldConvertGapToPadding?: boolean;
}
