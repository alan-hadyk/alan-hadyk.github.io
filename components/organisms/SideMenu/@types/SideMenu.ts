import { IButtonProps } from "components/molecules/Button/@types/Button";
import { IHorizontalLinksWithIconsProps } from "components/molecules/HorizontalLinksWithIcons/@types/HorizontalLinksWithIcons";
import { INavProps } from "components/molecules/Nav/@types/Nav";

export interface ISideMenuProps {
  icons: IHorizontalLinksWithIconsProps["icons"];
  id?: string;
  isExpanded?: boolean;
  navItems?: INavProps["navItems"];
  onCVButtonClick?: IButtonProps["onClick"];
}
