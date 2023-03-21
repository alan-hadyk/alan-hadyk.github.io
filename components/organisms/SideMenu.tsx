import { Button } from "components/molecules/Button/Button";
import { HorizontalLinksWithIcons } from "components/molecules/HorizontalLinksWithIcons/HorizontalLinksWithIcons";
import { Nav } from "components/molecules/Nav/Nav";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Responsive } from "components/layout/Responsive/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { ISideMenuProps } from "components/organisms/@types/SideMenu";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { NavItemPosition } from "components/molecules/NavItem/@types/NavItem";
import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";
import { ButtonSize } from "components/molecules/Button/@types/Button";

const SideMenu: React.FC<ISideMenuProps> = ({
  isExpanded = false,
  onCVButtonClick
}) => (
  <LayoutContainer
    themeClasses={{
      backgroundColor: "bg-blue600/[.875]",
      borderColor: "border-blue300/75",
      borderStyle: "border-solid",
      borderWidth: "border-l-1",
      height: "h-full",
      mediaQuery: [
        "msHighContrastNone:max-w-[300px]",
        "msHighContrastActive:max-w-[300px]"
      ],
      paddingTop: "pt-88",
      position: "fixed",
      right: "right-0",
      top: "top-0",
      transition: "transition-all",
      transitionDuration: "duration-fast",
      transitionTiming: "ease-in-out",
      translate: isExpanded ? "translate-x-0" : "translate-x-full",
      zIndex: "z-1000"
    }}
  >
    <LayoutContainer
      themeClasses={{
        height: "h-full",
        overflow: "overflow-y-auto",
        paddingLeft: "pl-48",
        paddingRight: "pr-48",
        paddingTop: "pt-8"
      }}
    >
      <Responsive devices={[Device.Mobile, Device.Tablet]}>
        <LayoutContainer
          themeClasses={{
            marginBottom: "mb-24"
          }}
        >
          <LayoutContainer
            themeClasses={{
              display: "flex",
              flexFlow: "flex-row-wrap",
              justifyContent: "justify-end"
            }}
          >
            <LayoutContainer
              themeClasses={{
                marginBottom: "mb-24"
              }}
            >
              <Nav
                navItems={[
                  {
                    href: "#experience",
                    title: "Experience"
                  },
                  {
                    href: "#skills",
                    title: "Skills"
                  },
                  {
                    href: "#about-me",
                    title: "About me"
                  },
                  {
                    href: "#contact",
                    title: "Contact"
                  }
                ]}
                position={NavItemPosition.Vertical}
              />
            </LayoutContainer>
          </LayoutContainer>
          <Button
            iconName={IconDynamicName.Download}
            iconWidth={isIE11() ? "w-24" : "w-auto"}
            onClick={onCVButtonClick}
            size={ButtonSize.Medium}
            tabIndex={0}
            themeClasses={{
              width: "w-full"
            }}
          >
            cv
          </Button>
        </LayoutContainer>
      </Responsive>

      <LayoutContainer
        themeClasses={{
          marginBottom: "mb-24"
        }}
      >
        <LayoutContainer
          themeClasses={{
            display: "flex",
            flexFlow: "flex-row-nowrap",
            pseudoClasses: ["directChildren:ml-24", "firstdirectChild:ml-0"]
          }}
        >
          <HorizontalLinksWithIcons
            icons={[
              {
                href: "https://github.com/alan-hadyk",
                iconName: IconDynamicName.GitHub,
                isExternal: true
              },
              {
                href: "https://www.toptal.com/resume/alan-hadyk",
                iconName: IconDynamicName.Toptal,
                isExternal: true
              },
              {
                href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
                iconName: IconDynamicName.LinkedIn,
                isExternal: true
              }
            ]}
          />
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { SideMenu };
