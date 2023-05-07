import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { TChildren } from "types/props";

export interface IPageTemplateProps {
  as?: ILayoutContainerProps["as"];
  children: TChildren;
}
