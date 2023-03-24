import { HorizontalLinksWithIcons } from "components/molecules/HorizontalLinksWithIcons/HorizontalLinksWithIcons";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ISideMenuProps } from "components/organisms/SideMenu/@types/SideMenu";
import { useSideMenuThemeClasses } from "components/organisms/SideMenu/hooks/useSideMenuThemeClasses";
import {
  sideMenuDesktopNavInnerContainerDefaultThemeClasses,
  sideMenuDesktopNavOuterContainerDefaultThemeClasses,
  sideMenuInnerContainerDefaultThemeClasses
} from "components/organisms/SideMenu/styles";
import { SideMenuMobileAndTablet } from "components/organisms/SideMenu/screens/SideMenuMobileAndTablet";

const SideMenu: React.FC<ISideMenuProps> = ({
  isExpanded = false,
  icons,
  navItems,
  onCVButtonClick
}) => {
  const { sideMenuOuterContainerThemeClasses } = useSideMenuThemeClasses({
    isExpanded
  });

  return (
    <LayoutContainer themeClasses={sideMenuOuterContainerThemeClasses}>
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
            <HorizontalLinksWithIcons icons={icons} />
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { SideMenu };
