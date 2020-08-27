export type Device = "tv" | "desktop" | "tablet" | "mobile";

export interface DevicesProps {
  devices?: Device[];
}

export interface ResponsiveProps {
  children: JSX.Element | JSX.Element[];
  dataTestDesktopId?: string;
  dataTestId?: string;
  dataTestMobileId?: string;
  dataTestTabletId?: string;
  dataTestTvId?: string;
  devices: Device[];
  height?: "auto" | "100%";
  width?: "auto" | "100%";
}

export interface ResponsiveContainerProps {
  device: Device;
  height: ResponsiveProps["height"];
  width: ResponsiveProps["width"];
} 