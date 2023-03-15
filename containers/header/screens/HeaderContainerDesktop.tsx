import { MenuButton } from "components/molecules/MenuButton/MenuButton";

import { Button } from "components/molecules/Button";
import { Nav } from "components/molecules/Nav";

import { SideMenu } from "components/organisms/SideMenu";

import { Responsive } from "components/layout/Responsive/Responsive";

import { Backdrop } from "components/atoms/Backdrop/Backdrop";
import { isIE11 } from "helpers/browser/isIE11";

import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerScreenProps } from "containers/header/@types/HeaderContainerScreen";

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
        <Nav />
      </LayoutContainer>

      <Button
        buttonText="cv"
        iconName="download"
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size="medium"
        tabIndex={0}
      />

      <MenuButton isOpen={isMenuVisible} onClick={onClick} />

      {isMenuVisible && <Backdrop onClick={onClick} />}

      <SideMenu isExpanded={isMenuVisible} />
    </LayoutContainer>
  </Responsive>
);

export { HeaderContainerDesktop };
