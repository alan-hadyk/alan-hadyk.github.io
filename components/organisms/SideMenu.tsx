import { Button } from "components/molecules/Button";
import { MenuIcons } from "components/molecules/MenuIcons";
import { Nav } from "components/molecules/Nav";

import { LayoutContainer } from "components/layout/LayoutContainer";
import { Responsive } from "components/layout/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { ISideMenuProps } from "components/organisms/@types/SideMenu";
import { Device } from "components/layout/@types/Responsive";

const SideMenu: React.FC<ISideMenuProps> = ({
  isExpanded = false,
  onCVButtonClick
}) => (
  <LayoutContainer
    className={`
      bg-blue600/[.875]
      border-l-1 border-solid border-blue300/75
      h-full
      pt-88
      fixed right-0 top-0
      ${isExpanded ? "translate-x-0" : "translate-x-full"}
      transition-all duration-fast ease-in-out
      z-1000

      msHighContrastNone:max-w-[300px] msHighContrastActive:max-w-[300px]
    `}
    dataCy="SideMenu"
  >
    <LayoutContainer
      className="overflow-y-auto"
      height="h-full"
      paddingLeft="pl-48"
      paddingRight="pr-48"
      paddingTop="pt-8"
    >
      <Responsive
        dataCy="ResponsiveMobileTablet"
        devices={[Device.MOBILE, Device.TABLET]}
      >
        <LayoutContainer marginBottom="mb-24">
          <LayoutContainer
            display="flex"
            className="flex-row flex-wrap"
            justifyContent="justify-end"
          >
            <LayoutContainer marginBottom="mb-24">
              <Nav position="vertical" />
            </LayoutContainer>
          </LayoutContainer>
          <Button
            buttonText="cv"
            dataCy="CvButton"
            iconName="btnDownload"
            iconWidth={isIE11() ? "w-24" : "w-auto"}
            onClick={onCVButtonClick}
            size="medium"
            tabIndex={0}
            width="w-full"
          />
        </LayoutContainer>
      </Responsive>

      <LayoutContainer marginBottom="mb-24">
        <LayoutContainer
          display="flex"
          className="flex-row flex-nowrap directChildren:ml-24 firstdirectChild:ml-0"
        >
          <MenuIcons />
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { SideMenu };
