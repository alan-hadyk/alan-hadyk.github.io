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
  flex: string;
  height?: Spacing | string;
  order?: number;
  overflow?: string;
  paddingBottom?: Spacing | string;
  paddingTop?: Spacing | string;
}
