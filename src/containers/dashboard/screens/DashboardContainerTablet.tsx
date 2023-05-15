import { DashboardInnerContainer } from "@app/components/molecules/DashboardInnerContainer/DashboardInnerContainer";
import { DashboardOuterContainer } from "@app/components/molecules/DashboardOuterContainer/DashboardOuterContainer";
import { DashboardContainerTechStack } from "@app/containers/Dashboard/sections/DashboardContainerTechStack";
import { DashboardContainerCommits } from "@app/containers/Dashboard/sections/DashboardContainerCommits";
import { DashboardContainerPoweredBy } from "@app/containers/Dashboard/sections/DashboardContainerPoweredBy";

import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "@app/components/molecules/Console/screens/ConsoleTvDesktopAndTablet";
import { catchPhrase } from "@app/containers/Dashboard/config";
import {
  dashboardContainerBottomInnerContainerDefaultThemeClasses,
  dashboardContainerTopInnerContainerDefaultThemeClasses,
} from "@app/containers/Dashboard/styles";

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
