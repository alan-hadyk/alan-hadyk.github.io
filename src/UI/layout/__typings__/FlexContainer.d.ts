import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface FlexContainerProps {
  alignItems? : "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  children: JSX.Element | JSX.Element[];
  flexFlow?: "row wrap" | "row nowrap" | "column wrap" | "column nowrap";
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between"; 
}
