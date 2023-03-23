import { DashboardInnerContainer } from "components/molecules/DashboardInnerContainer/DashboardInnerContainer";
import { DashboardOuterContainer } from "components/molecules/DashboardOuterContainer/DashboardOuterContainer";
import { DashboardContainerTechStack } from "containers/dashboard/sections/DashboardContainerTechStack";
import { DashboardContainerCommits } from "containers/dashboard/sections/DashboardContainerCommits";
import { DashboardContainerPoweredBy } from "containers/dashboard/sections/DashboardContainerPoweredBy";

import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/screens/ConsoleTvDesktopAndTablet";
import { catchPhrase } from "containers/dashboard/config";
import {
  dashboardContainerBottomInnerContainerDefaultThemeClasses,
  dashboardContainerTopInnerContainerDefaultThemeClasses
} from "containers/dashboard/styles";

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
