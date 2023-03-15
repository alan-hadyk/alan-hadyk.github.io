import { TChildren } from "types/props";

export enum Device {
  DESKTOP = "desktop",
  MOBILE = "mobile",
  TABLET = "tablet",
  TV = "tv"
}

export interface IResponsiveProps {
  children: TChildren;
  devices: Device[];
}
