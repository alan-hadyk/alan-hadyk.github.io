import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren } from "types/props";

export interface IDashboardInnerContainerProps {
  children: TChildren;
  height?: ILayoutContainerProps["height"];
  marginBottom?: ILayoutContainerProps["marginBottom"];
  marginTop?: ILayoutContainerProps["marginTop"];
}
