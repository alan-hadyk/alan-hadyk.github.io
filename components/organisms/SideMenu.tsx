import { Button } from "components/molecules/Button";
import { MenuIcons } from "components/molecules/MenuIcons";
import { Nav } from "components/molecules/Nav";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Responsive } from "components/layout/Responsive/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { ISideMenuProps } from "components/organisms/@types/SideMenu";
import { Device } from "components/layout/Responsive/@types/Responsive";

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
      <Responsive devices={[Device.MOBILE, Device.TABLET]}>
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
              <Nav position="vertical" />
            </LayoutContainer>
          </LayoutContainer>
          <Button
            buttonText="cv"
            iconName="download"
            iconWidth={isIE11() ? "w-24" : "w-auto"}
            onClick={onCVButtonClick}
            size="medium"
            tabIndex={0}
            width="w-full"
          />
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
          <MenuIcons />
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { SideMenu };
