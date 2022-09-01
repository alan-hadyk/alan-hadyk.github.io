export type Device = "tv" | "desktop" | "tablet" | "mobile";

export interface DevicesProps {
  devices?: Device[];
}

export interface ResponsiveProps {
  children: JSX.Element | JSX.Element[];
  dataTestId?: string;
  devices: Device[];
  height?: "auto" | "100%";
  width?: "auto" | "100%";
}
