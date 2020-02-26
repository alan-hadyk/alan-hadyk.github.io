export interface NavItemProps {
  href: string;
  isActive?: boolean;
  title: string;
}

export type NavItemLinkProps = Partial<NavItemProps>;

export interface NavItemLineProps extends NavItemLinkProps {
  direction: "left" | "right";
}
