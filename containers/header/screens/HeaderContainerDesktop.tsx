import { MenuButton } from "components/molecules/MenuButton/MenuButton";

import { Button } from "components/molecules/Button/Button";
import { Nav } from "components/molecules/Nav/Nav";
import { Responsive } from "components/layout/Responsive/Responsive";

import { Backdrop } from "components/atoms/Backdrop/Backdrop";
import { isIE11 } from "helpers/browser/isIE11";

import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerScreenProps } from "containers/header/@types/HeaderContainerScreen";
import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";
import { ButtonSize } from "components/molecules/Button/@types/Button";
import { SideMenu } from "components/organisms/SideMenu/SideMenu";
import { icons, navItems } from "containers/header/config";
import { headerContainerDesktopDefaultThemeClasses } from "containers/header/styles";

const HeaderContainerDesktop: React.FC<IHeaderContainerScreenProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}) => (
  <Responsive devices={[Device.Desktop]}>
    <LayoutContainer themeClasses={headerContainerDesktopDefaultThemeClasses}>
      <LayoutContainer themeClasses={{ marginRight: "mr-24" }}>
        <Nav navItems={navItems} />
      </LayoutContainer>

      <Button
        iconName={IconDynamicName.Download}
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size={ButtonSize.Medium}
        tabIndex={0}
      >
        cv
      </Button>

      <MenuButton
        id="menu-button-desktop"
        isOpen={isMenuVisible}
        onClick={onClick}
      />

      {isMenuVisible && <Backdrop onClick={onClick} />}

      <SideMenu
        id="side-menu-desktop"
        isExpanded={isMenuVisible}
        icons={icons}
      />
    </LayoutContainer>
  </Responsive>
);

export { HeaderContainerDesktop };
