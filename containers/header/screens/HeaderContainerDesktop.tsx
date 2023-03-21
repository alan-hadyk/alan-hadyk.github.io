import { MenuButton } from "components/molecules/MenuButton/MenuButton";

import { Button } from "components/molecules/Button/Button";
import { Nav } from "components/molecules/Nav/Nav";

import { SideMenu } from "components/organisms/SideMenu";

import { Responsive } from "components/layout/Responsive/Responsive";

import { Backdrop } from "components/atoms/Backdrop/Backdrop";
import { isIE11 } from "helpers/browser/isIE11";

import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerScreenProps } from "containers/header/@types/HeaderContainerScreen";
import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";

const HeaderContainerDesktop: React.FC<IHeaderContainerScreenProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}) => (
  <Responsive devices={[Device.DESKTOP]}>
    <LayoutContainer
      themeClasses={{
        alignItems: "items-center",
        display: "flex",
        flexFlow: "flex-row-nowrap",
        height: "h-48",
        justifyContent: "justify-start",
        pseudoClasses: ["directChildren:ml-24", "firstdirectChild:ml-0"]
      }}
    >
      <LayoutContainer themeClasses={{ marginRight: "mr-24" }}>
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
        />
      </LayoutContainer>

      <Button
        iconName={IconDynamicName.Download}
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size="medium"
        tabIndex={0}
      >
        cv
      </Button>

      <MenuButton isOpen={isMenuVisible} onClick={onClick} />

      {isMenuVisible && <Backdrop onClick={onClick} />}

      <SideMenu isExpanded={isMenuVisible} />
    </LayoutContainer>
  </Responsive>
);

export { HeaderContainerDesktop };
