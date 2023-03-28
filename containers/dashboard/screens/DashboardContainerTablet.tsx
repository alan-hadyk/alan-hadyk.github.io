import { DashboardInnerContainer } from "components/molecules/DashboardInnerContainer/DashboardInnerContainer";
import { DashboardOuterContainer } from "components/molecules/DashboardOuterContainer/DashboardOuterContainer";
import { DashboardContainerTechStack } from "containers/Dashboard/sections/DashboardContainerTechStack";
import { DashboardContainerCommits } from "containers/Dashboard/sections/DashboardContainerCommits";
import { DashboardContainerPoweredBy } from "containers/Dashboard/sections/DashboardContainerPoweredBy";

import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/screens/ConsoleTvDesktopAndTablet";
import { catchPhrase } from "containers/Dashboard/config";
import {
  dashboardContainerBottomInnerContainerDefaultThemeClasses,
  dashboardContainerTopInnerContainerDefaultThemeClasses
} from "containers/Dashboard/styles";

const DashboardContainerTablet: React.FC = () => (
  <Responsive devices={[Device.Tablet]}>
    <DashboardOuterContainer>
      <DashboardInnerContainer
        themeClasses={dashboardContainerTopInnerContainerDefaultThemeClasses}
      >
        <DashboardContainerTechStack />
      </DashboardInnerContainer>

      <ConsoleTvDesktopAndTablet>{catchPhrase}</ConsoleTvDesktopAndTablet>

      <DashboardInnerContainer
        themeClasses={dashboardContainerBottomInnerContainerDefaultThemeClasses}
      >
        <DashboardContainerCommits />
        <DashboardContainerPoweredBy />
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  </Responsive>
);

export { DashboardContainerTablet };
