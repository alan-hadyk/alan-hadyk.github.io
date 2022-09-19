import PropTypes from "prop-types";

import { Button } from "components/molecules/Button";
import { MenuIcons } from "components/molecules/MenuIcons";
import { Nav } from "components/molecules/Nav";

import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { IHeaderTvProps } from "components/organisms/Header/@types/HeaderTv";
import { Device } from "components/layout/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer";

const HeaderTv: React.FC<IHeaderTvProps> = ({ onCVButtonClick }) => (
  <Responsive dataCy="HeaderTv" devices={[Device.TV]}>
    <LayoutContainer
      className="flex-row flex-nowrap directChildren:ml-24 firstdirectChild:ml-0"
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

      <MenuIcons />
    </LayoutContainer>
  </Responsive>
);

HeaderTv.propTypes = {
  onCVButtonClick: PropTypes.func.isRequired
};

export { HeaderTv };
