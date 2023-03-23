import { Button } from "components/molecules/Button/Button";
import { HorizontalLinksWithIcons } from "components/molecules/HorizontalLinksWithIcons/HorizontalLinksWithIcons";
import { Nav } from "components/molecules/Nav/Nav";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Responsive } from "components/layout/Responsive/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { Device } from "components/layout/Responsive/@types/Responsive";
import { NavItemPosition } from "components/molecules/NavItem/@types/NavItem";
import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";
import { ButtonSize } from "components/molecules/Button/@types/Button";
import { ISideMenuProps } from "components/organisms/SideMenu/@types/SideMenu";
import { useSideMenuState } from "components/organisms/SideMenu/hooks/useSideMenuThemeClasses";
import {
  sideMenuCVButtonDefaultThemeClasses,
  sideMenuDesktopNavInnerContainerDefaultThemeClasses,
  sideMenuDesktopNavOuterContainerDefaultThemeClasses,
  sideMenuInnerContainerDefaultThemeClasses,
  sideMenuMobileNavInnerContainerDefaultThemeClasses,
  sideMenuMobileNavOuterContainerDefaultThemeClasses,
  sideMenuMobileNavWrapperDefaultThemeClasses
} from "components/organisms/SideMenu/styles";

const SideMenu: React.FC<ISideMenuProps> = ({
  isExpanded = false,
  onCVButtonClick
}) => {
  const { sideMenuOuterContainerThemeClasses } = useSideMenuState({
    isExpanded
  });

  return (
    <LayoutContainer themeClasses={sideMenuOuterContainerThemeClasses}>
      <LayoutContainer themeClasses={sideMenuInnerContainerDefaultThemeClasses}>
        <Responsive devices={[Device.Mobile, Device.Tablet]}>
          <LayoutContainer
            themeClasses={sideMenuMobileNavWrapperDefaultThemeClasses}
          >
            <LayoutContainer
              themeClasses={sideMenuMobileNavOuterContainerDefaultThemeClasses}
            >
              <LayoutContainer
                themeClasses={
                  sideMenuMobileNavInnerContainerDefaultThemeClasses
                }
              >
                <Nav
                  navItems={[
                    {
                      href: "#experience",
                      title: "Experience"
                    },
                    {
                      href: "#skills",
                      title: "Skills"
                    },
                    {
                      href: "#about-me",
                      title: "About me"
                    },
                    {
                      href: "#contact",
                      title: "Contact"
                    }
                  ]}
                  position={NavItemPosition.Vertical}
                />
              </LayoutContainer>
            </LayoutContainer>
            <Button
              iconName={IconDynamicName.Download}
              iconWidth={isIE11() ? "w-24" : "w-auto"}
              onClick={onCVButtonClick}
              size={ButtonSize.Medium}
              tabIndex={0}
              themeClasses={sideMenuCVButtonDefaultThemeClasses}
            >
              cv
            </Button>
          </LayoutContainer>
        </Responsive>

        <LayoutContainer
          themeClasses={sideMenuDesktopNavOuterContainerDefaultThemeClasses}
        >
          <LayoutContainer
            themeClasses={sideMenuDesktopNavInnerContainerDefaultThemeClasses}
          >
            <HorizontalLinksWithIcons
              icons={[
                {
                  href: "https://github.com/alan-hadyk",
                  iconName: IconDynamicName.GitHub,
                  isExternal: true
                },
                {
                  href: "https://www.toptal.com/resume/alan-hadyk",
                  iconName: IconDynamicName.Toptal,
                  isExternal: true
                },
                {
                  href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
                  iconName: IconDynamicName.LinkedIn,
                  isExternal: true
                }
              ]}
            />
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { SideMenu };
