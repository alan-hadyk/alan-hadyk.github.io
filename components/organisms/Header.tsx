import { useCallback, useState } from "react";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Responsive } from "components/layout/Responsive/Responsive";

import { useResize } from "hooks/useResize";

import { IHeaderProps } from "components/organisms/@types/Header";
import { Device } from "components/layout/Responsive/@types/Responsive";
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
      themeClasses={{
        left: "left-0",
        position: "fixed",
        right: "right-0",
        top: "top-0",
        zIndex
      }}
    >
      <LayoutContainer
        as="header"
        themeClasses={{
          backgroundColor: "bg-blue600/75",
          borderBottomColor: "border-b-blue300/50",
          borderStyle: "border-solid",
          borderWidth: "border-b-1",
          height: "h-96"
        }}
      >
        <LayoutContainer
          themeClasses={{
            display: "flex",
            flexFlow: "flex-row-nowrap",
            justifyContent: "justify-center"
          }}
        >
          <LayoutContainer
            themeClasses={{
              maxWidth: "max-w-screenXl",
              paddingBottom: "pb-24",
              paddingLeft: "pl-48",
              paddingRight: "pr-48",
              paddingTop: "pt-24",
              width: "w-full"
            }}
          >
            <LayoutContainer
              themeClasses={{
                alignItems: "items-center",
                display: "flex",
                flexFlow: "flex-row-nowrap",
                height: "h-48",
                justifyContent: "justify-between"
              }}
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
