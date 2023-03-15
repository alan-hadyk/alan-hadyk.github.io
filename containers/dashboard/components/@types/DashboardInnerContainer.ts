import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { TChildren } from "types/props";

export interface IDashboardInnerContainerProps {
  children: TChildren;
  height?: ILayoutContainerProps["height"];
  marginBottom?: ILayoutContainerProps["marginBottom"];
  marginTop?: ILayoutContainerProps["marginTop"];
}
