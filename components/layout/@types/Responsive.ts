import { TChildren } from "types/props";
import { ILayoutContainerProps } from "../LayoutContainer/@types/LayoutContainer";

export enum Device {
  DESKTOP = "desktop",
  MOBILE = "mobile",
  TABLET = "tablet",
  TV = "tv"
}

export interface IResponsiveProps {
  children: TChildren;
  devices: Device[];
  height?: ILayoutContainerProps["height"];
  width?: ILayoutContainerProps["width"];
}
