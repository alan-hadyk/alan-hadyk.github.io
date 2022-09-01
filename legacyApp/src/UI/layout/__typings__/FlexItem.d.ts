export interface FlexItemProps {
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  children: JSX.Element | JSX.Element[];
  className?: string;
  dataCy?: string;
  dataTestId?: string;
  display?: "block" | "flex";
  flex?: string;
  height?: Spacing | string;
  justifyContent?: "initial" | "center" | "flex-start" | "flex-end";
  order?: number;
  overflow?: string;
  paddingBottom?: Spacing | string;
  paddingLeft?: Spacing | string;
  paddingRight?: Spacing | string;
  paddingTop?: Spacing | string;
  shouldApplyWidth?: boolean;
}

export interface FlexItemContainerProps extends FlexItemProps {
  width?: string;
}
