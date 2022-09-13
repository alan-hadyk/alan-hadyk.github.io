import PropTypes from "prop-types";

import { MenuButton } from "components/atoms/MenuButton";

import { Button } from "components/molecules/Button";
import { Nav } from "components/molecules/Nav";

import { SideMenu } from "components/organisms/SideMenu";

import { Responsive } from "components/layout/Responsive";

import { Backdrop } from "components/atoms/Backdrop";
import { isIE11 } from "helpers/browser/isIE11";

import { IHeaderMobileProps } from "components/organisms/Header/@types/HeaderMobile";
import { Device } from "components/layout/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer";

const HeaderDesktop: React.FC<IHeaderMobileProps> = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}) => (
  <Responsive dataTestId="HeaderDesktop" devices={[Device.DESKTOP]}>
    <LayoutContainer
      alignItems="items-center"
      className="directChildren:ml-24 firstdirectChild:ml-0"
      flexFlow="flex-row flex-nowrap"
      display="flex"
      height="h-48"
      justifyContent="justify-start"
    >
      <LayoutContainer marginRight="mr-24">
        <Nav />
      </LayoutContainer>

      <Button
        buttonText="cv"
        dataCy="CvButton"
        iconName="btnDownload"
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

HeaderDesktop.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  onCVButtonClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export { HeaderDesktop };
