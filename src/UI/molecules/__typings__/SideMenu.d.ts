export interface SideMenuProps {
  device: "tablet" | "mobile";
  isExpanded: boolean;
}

export type SideMenuContainerProps = Partial<SideMenuProps>;
