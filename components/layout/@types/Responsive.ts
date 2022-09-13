import { TChildren } from "types/props";
import { ILayoutContainerProps } from "./LayoutContainer";

export enum Device {
  DESKTOP = "desktop",
  MOBILE = "mobile",
  TABLET = "tablet",
  TV = "tv"
}

export interface IResponsiveProps {
  children: TChildren;
  dataTestId?: string;
  devices: Device[];
  height?: ILayoutContainerProps["height"];
  width?: ILayoutContainerProps["width"];
}
