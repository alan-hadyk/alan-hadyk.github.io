export interface NavItemProps {
  href: string;
  isActive?: boolean;
  tabIndex?: number;
  title: string;
}

export type NavItemLinkProps = Partial<NavItemProps>;

export interface NavItemLineProps extends NavItemLinkProps {
  direction: "left" | "right";
}
