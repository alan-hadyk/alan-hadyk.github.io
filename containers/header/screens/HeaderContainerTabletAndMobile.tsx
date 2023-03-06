import { MenuButton } from "components/atoms/MenuButton";
import { Backdrop } from "components/atoms/Backdrop";

import { SideMenu } from "components/organisms/SideMenu";

import { Responsive } from "components/layout/Responsive";

import { Device } from "components/layout/@types/Responsive";
import { IHeaderContainerScreenProps } from "containers/header/@types/HeaderContainerScreen";

const HeaderContainerTabletAndMobile: React.FC<IHeaderContainerScreenProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}) => (
  <Responsive devices={[Device.TABLET, Device.MOBILE]}>
    <MenuButton isOpen={isMenuVisible} onClick={onClick} />

    {isMenuVisible && <Backdrop onClick={onClick} />}

    <SideMenu isExpanded={isMenuVisible} onCVButtonClick={onCVButtonClick} />
  </Responsive>
);

export { HeaderContainerTabletAndMobile };
