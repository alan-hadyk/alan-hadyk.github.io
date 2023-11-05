import { IButtonProps } from "@app/components/molecules/Button/@types/Button";
import { IHorizontalLinksWithImagesProps } from "@app/components/molecules/HorizontalLinksWithImages/@types/HorizontalLinksWithImages";
import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

export interface ISideMenuProps {
  icons: IHorizontalLinksWithImagesProps["icons"];
  id?: string;
  isExpanded?: boolean;
  navItems?: INavProps["navItems"];
  onCVButtonClick?: IButtonProps["onClick"];
}
