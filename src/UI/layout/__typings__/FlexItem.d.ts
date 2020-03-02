export interface FlexItemProps {
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch"; 
  children: JSX.Element | JSX.Element[];
  flex: string;
  order?: number;
}
