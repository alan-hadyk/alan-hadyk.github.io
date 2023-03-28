import { MenuButton } from "components/molecules/MenuButton/MenuButton";
import { Backdrop } from "components/atoms/Backdrop/Backdrop";
import { Responsive } from "components/layout/Responsive/Responsive";

import { Device } from "components/layout/Responsive/@types/Responsive";
import { IHeaderContainerScreenProps } from "containers/Header/@types/HeaderContainerScreen";
import { SideMenu } from "components/organisms/SideMenu/SideMenu";
import { icons, navItems } from "containers/Header/config";

const HeaderContainerTabletAndMobile: React.FC<IHeaderContainerScreenProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}) => (
  <Responsive devices={[Device.Tablet, Device.Mobile]}>
    <MenuButton isOpen={isMenuVisible} onClick={onClick} />

    {isMenuVisible && <Backdrop onClick={onClick} />}

    <SideMenu
      isExpanded={isMenuVisible}
      navItems={navItems}
      onCVButtonClick={onCVButtonClick}
      icons={icons}
    />
  </Responsive>
);

export { HeaderContainerTabletAndMobile };
