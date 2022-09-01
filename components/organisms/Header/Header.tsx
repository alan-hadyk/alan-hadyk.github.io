import { useCallback, useState } from "react";

import LinkWithIcon from "components/molecules/LinkWithIcon";

import HeaderTv from "components/organisms/Header/HeaderTv";
import HeaderDesktop from "components/organisms/Header/HeaderDesktop";
import HeaderTabletAndMobile from "components/organisms/Header/HeaderTabletAndMobile";

import { LayoutContainer } from "components/layout/LayoutContainer";
import Responsive from "components/layout/Responsive";

import { useResize } from "hooks/useResize";

import { IHeaderProps } from "components/organisms/Header/@types/Header";
import { zIndexPropTypes } from "helpers/propTypes/zIndex";

const downloadCV = (): Window | null =>
  typeof window !== undefined
    ? window?.open("/pdf/Alan_Hadyk_CV_2022_compressed.pdf", "_blank")
    : null;

const Header: React.FC<IHeaderProps> = ({ zIndex = "z-100" }) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const toggleMenuVisibility = useCallback((): void => {
    setIsMenuVisible((_isMenuVisible) => !_isMenuVisible);
  }, []);

  useResize({
    breakpoint: "1680px",
    callback: () => setIsMenuVisible(false)
  });

  return (
    <LayoutContainer
      left="left-0"
      position="fixed"
      right="right-0"
      top="top-0"
      zIndex={zIndex}
    >
      <LayoutContainer
        className="bg-blue600/75 border-b-thin border-b-blue300/50"
        height="h-96"
      >
        <LayoutContainer className="flex-row flex-nowrap" display="flex">
          {renderHeaderInnerContainer()}
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );

  function renderHeaderInnerContainer(): JSX.Element {
    return (
      <LayoutContainer
        className="max-w-screenXl"
        paddingBottom="pb-24"
        paddingLeft="pl-48"
        paddingRight="pr-48"
        paddingTop="pt-24"
        width="w-full"
      >
        <LayoutContainer
          className="flex-row flex-nowrap"
          height="h-48"
          justifyContent="justify-between"
        >
          <Responsive
            dataTestId="ResponsiveLinkTvDesktopTablet"
            devices={["tv", "desktop", "tablet"]}
          >
            <LinkWithIcon
              dataCy="SiteLogo"
              href="/"
              height="spacing48"
              iconName="logo"
              width="spacing248"
            />
          </Responsive>

          <Responsive dataTestId="ResponsiveLinkMobile" devices={["mobile"]}>
            <LinkWithIcon
              dataCy="SiteLogoMobile"
              href="/"
              iconName="logoShortcut"
              width="spacing64"
            />
          </Responsive>

          <HeaderTv onCVButtonClick={downloadCV} />

          <HeaderDesktop
            isMenuVisible={isMenuVisible}
            onCVButtonClick={downloadCV}
            onClick={toggleMenuVisibility}
          />

          <HeaderTabletAndMobile
            isMenuVisible={isMenuVisible}
            onCVButtonClick={downloadCV}
            onClick={toggleMenuVisibility}
          />
        </LayoutContainer>
      </LayoutContainer>
    );
  }
};

Header.propTypes = {
  zIndex: zIndexPropTypes
};

export { Header, downloadCV };
