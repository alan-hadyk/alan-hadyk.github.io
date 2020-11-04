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
  flex?: string;
  height?: Spacing | string;
  order?: number;
  overflow?: string;
  paddingBottom?: Spacing | string;
  paddingLeft?: Spacing | string;
  paddingRight?: Spacing | string;
  paddingTop?: Spacing | string;
  shouldApplyWidth?: boolean;
  width?: string;
}

export interface FlexItemContainerProps extends FlexItemProps {
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
}
