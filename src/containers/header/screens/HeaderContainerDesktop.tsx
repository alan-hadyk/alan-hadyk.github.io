import { MenuButton } from "@app/components/molecules/MenuButton/MenuButton";

import { Button } from "@app/components/molecules/Button/Button";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { Backdrop } from "@app/components/atoms/Backdrop/Backdrop";
import { isIE11 } from "@app/helpers/browser/isIE11";

import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerScreenProps } from "@app/containers/header/@types/HeaderContainerScreen";
import { ButtonSize } from "@app/components/molecules/Button/@types/Button";
import { SideMenu } from "@app/components/organisms/SideMenu/SideMenu";
import { icons, navItems } from "@app/containers/header/config";
import { headerContainerDesktopDefaultThemeClasses } from "@app/containers/header/styles";
import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";

const HeaderContainerDesktop: React.FC<IHeaderContainerScreenProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick,
}) => (
  <Responsive devices={[Device.Desktop]}>
    <LayoutContainer themeClasses={headerContainerDesktopDefaultThemeClasses}>
      <LayoutContainer themeClasses={{ marginRight: "mr-24" }}>
        <Nav navItems={navItems} />
      </LayoutContainer>

      <Button
        iconName={ImageDynamicName.Download}
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size={ButtonSize.Medium}
        tabIndex={0}
      >
        Resume
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
