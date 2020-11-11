// import { Spacing } from "styles/variables/__typings__/variables";

export interface ColumnsContainerProps {
  children: JSX.Element | JSX.Element[];
  columnCount?: number;
  columnGap?: Spacing | string;
}
