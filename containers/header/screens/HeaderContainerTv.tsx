import { Button } from "components/molecules/Button/Button";
import { HorizontalLinksWithIcons } from "components/molecules/HorizontalLinksWithIcons/HorizontalLinksWithIcons";
import { Nav } from "components/molecules/Nav/Nav";

import { Responsive } from "components/layout/Responsive/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerTvProps } from "containers/header/@types/HeaderContainerTv";
import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";
import { ButtonSize } from "components/molecules/Button/@types/Button";

const HeaderContainerTv: React.FC<IHeaderContainerTvProps> = ({
  onCVButtonClick
}) => (
  <Responsive devices={[Device.Tv]}>
    <LayoutContainer
      themeClasses={{
        display: "flex",
        flexFlow: "flex-row-nowrap",
        height: "h-48",
        justifyContent: "justify-start",
        pseudoClasses: ["directChildren:ml-24", "firstdirectChild:ml-0"]
      }}
    >
      <LayoutContainer themeClasses={{ marginRight: "mr-24" }}>
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
        />
      </LayoutContainer>

      <Button
        iconName={IconDynamicName.Download}
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size={ButtonSize.Medium}
        tabIndex={0}
      >
        cv
      </Button>

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
  </Responsive>
);

export { HeaderContainerTv };
