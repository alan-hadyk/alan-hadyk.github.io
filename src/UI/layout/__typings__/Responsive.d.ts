export type Device = "desktop" | "tablet" | "mobile";

export interface ResponsiveProps {
  children: JSX.Element | JSX.Element[];
  dataTestDesktopId?: string;
  dataTestMobileId?: string;
  dataTestTabletId?: string;
  devices: Device[];
} 