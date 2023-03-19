export enum NavItemPosition {
  Horizontal,
  Vertical
}

export interface INavItemProps {
  href: string;
  isActive?: boolean;
  position?: NavItemPosition;
  tabIndex?: number;
  title: string;
}

export type INavItemLinkProps = Partial<INavItemProps>;

export interface INavItemLineProps extends INavItemLinkProps {
  direction: "left" | "right";
}
