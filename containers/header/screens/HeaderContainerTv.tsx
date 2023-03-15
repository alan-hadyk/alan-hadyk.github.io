import { Button } from "components/molecules/Button";
import { MenuIcons } from "components/molecules/MenuIcons";
import { Nav } from "components/molecules/Nav";

import { Responsive } from "components/layout/Responsive/Responsive";

import { isIE11 } from "helpers/browser/isIE11";

import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IHeaderContainerTvProps } from "containers/header/@types/HeaderContainerTv";

const HeaderContainerTv: React.FC<IHeaderContainerTvProps> = ({
  onCVButtonClick
}) => (
  <Responsive devices={[Device.TV]}>
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
        <Nav />
      </LayoutContainer>

      <Button
        buttonText="cv"
        iconName="download"
        iconWidth={isIE11() ? "w-24" : "w-auto"}
        onClick={onCVButtonClick}
        size="medium"
        tabIndex={0}
      />

      <MenuIcons />
    </LayoutContainer>
  </Responsive>
);

export { HeaderContainerTv };
