import { MenuButton } from "components/atoms/MenuButton";
import { Backdrop } from "components/atoms/Backdrop";

import { SideMenu } from "components/organisms/SideMenu";

import { Responsive } from "components/layout/Responsive";

import { IHeaderMobileProps } from "components/organisms/Header/@types/HeaderMobile";
import { Device } from "components/layout/@types/Responsive";

const HeaderTabletAndMobile: React.FC<IHeaderMobileProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}) => (
  <Responsive
    dataCy="HeaderTabletMobile"
    devices={[Device.TABLET, Device.MOBILE]}
  >
    <MenuButton isOpen={isMenuVisible} onClick={onClick} />

    {isMenuVisible && <Backdrop onClick={onClick} />}

    <SideMenu isExpanded={isMenuVisible} onCVButtonClick={onCVButtonClick} />
  </Responsive>
);

export { HeaderTabletAndMobile };
