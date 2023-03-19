import { INavItemProps } from "components/molecules/NavItem/@types/NavItem";

export interface INavProps {
  navItems: INavItemProps[];
  position?: INavItemProps["position"];
}
