import { INavProps } from "components/molecules/@types/Nav";

export interface INavItemProps {
  href: string;
  isActive?: boolean;
  position?: INavProps["position"];
  tabIndex?: number;
  title: string;
}

export type INavItemLinkProps = Partial<INavItemProps>;

export interface INavItemLineProps extends INavItemLinkProps {
  direction: "left" | "right";
}
