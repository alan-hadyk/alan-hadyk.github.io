import { HorizontalLinksWithImages } from "@app/components/molecules/HorizontalLinksWithImages/HorizontalLinksWithImages";

import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { ISideMenuProps } from "@app/components/organisms/SideMenu/@types/SideMenu";
import { useSideMenuThemeClasses } from "@app/components/organisms/SideMenu/hooks/useSideMenuThemeClasses";
import {
  sideMenuDesktopNavInnerContainerDefaultThemeClasses,
  sideMenuDesktopNavOuterContainerDefaultThemeClasses,
  sideMenuInnerContainerDefaultThemeClasses,
} from "@app/components/organisms/SideMenu/styles";
import { SideMenuMobileAndTablet } from "@app/components/organisms/SideMenu/screens/SideMenuMobileAndTablet";

export const SideMenu: React.FC<ISideMenuProps> = ({
  id,
  isExpanded = false,
  icons,
  navItems,
  onCVButtonClick,
}) => {
  const { sideMenuOuterContainerThemeClasses } = useSideMenuThemeClasses({
    isExpanded,
  });

  return (
    <LayoutContainer id={id} themeClasses={sideMenuOuterContainerThemeClasses}>
      <LayoutContainer themeClasses={sideMenuInnerContainerDefaultThemeClasses}>
        <Responsive devices={[Device.Mobile, Device.Tablet]}>
          <SideMenuMobileAndTablet
            navItems={navItems}
            onCVButtonClick={onCVButtonClick}
          />
        </Responsive>

        <LayoutContainer
          themeClasses={sideMenuDesktopNavOuterContainerDefaultThemeClasses}
        >
          <LayoutContainer
            themeClasses={sideMenuDesktopNavInnerContainerDefaultThemeClasses}
          >
            <HorizontalLinksWithImages icons={icons} />
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};
