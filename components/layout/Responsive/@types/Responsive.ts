import { TChildren } from "types/props";

export enum Device {
  Desktop = "desktop",
  Mobile = "mobile",
  Tablet = "tablet",
  Tv = "tv"
}

export interface IResponsiveProps {
  children: TChildren;
  devices: Device[];
}
