import { HeaderMobileProps } from "UI/organisms/Header/__typings__/HeaderMobile";

export interface SideMenuProps {
  isExpanded?: boolean;
  onCVButtonClick?: HeaderMobileProps["onCVButtonClick"];
}

export type SideMenuContainerProps = Partial<SideMenuProps>;
