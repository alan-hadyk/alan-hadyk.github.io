import { useCallback, useState } from "react";

import { LayoutContainer } from "components/layout/LayoutContainer";
import { Responsive } from "components/layout/Responsive";

import { useResize } from "hooks/useResize";

import { IHeaderProps } from "components/organisms/@types/Header";
import { Device } from "components/layout/@types/Responsive";
import { LinkWithImage } from "components/molecules/LinkWithImage/LinkWithImage";

const Header: React.FC<IHeaderProps> = ({ children, zIndex = "z-400" }) => {
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
      className="Header"
      left="left-0"
      position="fixed"
      right="right-0"
      top="top-0"
      zIndex={zIndex}
    >
      <LayoutContainer
        as="header"
        className="bg-blue600/75 border-b-1 border-solid border-b-blue300/50"
        height="h-96"
      >
        <LayoutContainer
          className="flex-row flex-nowrap"
          display="flex"
          justifyContent="justify-center"
        >
          <LayoutContainer
            className="max-w-screenXl"
            paddingBottom="pb-24"
            paddingLeft="pl-48"
            paddingRight="pr-48"
            paddingTop="pt-24"
            width="w-full"
          >
            <LayoutContainer
              alignItems="items-center"
              flexFlow="flex-row flex-nowrap"
              display="flex"
              height="h-48"
              justifyContent="justify-between"
            >
              <Responsive devices={[Device.TV, Device.DESKTOP, Device.TABLET]}>
                <LinkWithImage
                  href="/"
                  height="h-48"
                  iconName="logo"
                  width="w-248"
                />
              </Responsive>

              <Responsive devices={[Device.MOBILE]}>
                <LinkWithImage href="/" iconName="logoShortcut" width="w-64" />
              </Responsive>

              {children({ isMenuVisible, toggleMenuVisibility })}
            </LayoutContainer>
          </LayoutContainer>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { Header };
