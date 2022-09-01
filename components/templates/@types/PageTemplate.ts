import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren } from "types/props";

export interface IPageTemplateProps {
  as?: ILayoutContainerProps["as"];
  children: TChildren;
}
