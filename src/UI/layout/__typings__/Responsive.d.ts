export interface DeviceProps {
  device?: "desktop" | "tablet" | "mobile";
}

export interface DevicesProps {
  devices?: DeviceProps["device"][];
}

export interface ResponsiveProps {
  children: JSX.Element | JSX.Element[];
  dataTestDesktopId?: string;
  dataTestId?: string;
  dataTestMobileId?: string;
  dataTestTabletId?: string;
  devices: DeviceProps["device"][];
  height?: "auto" | "100%";
  width?: "auto" | "100%";
}

export interface ResponsiveContainerProps {
  height: ResponsiveProps["height"];
  width: ResponsiveProps["width"];
}