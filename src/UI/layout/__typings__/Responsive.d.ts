export type Device = "desktop" | "tablet" | "mobile" | "tv";

export interface ResponsiveProps {
  children: JSX.Element | JSX.Element[];
  dataTestDesktopId?: string;
  dataTestMobileId?: string;
  dataTestTVId?: string;
  dataTestTabletId?: string;
  devices: Device[];
} 