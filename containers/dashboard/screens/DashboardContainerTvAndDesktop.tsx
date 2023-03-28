import { DashboardInnerContainer } from "components/molecules/DashboardInnerContainer/DashboardInnerContainer";
import { DashboardOuterContainer } from "components/molecules/DashboardOuterContainer/DashboardOuterContainer";
import { DashboardContainerTechStack } from "containers/Dashboard/sections/DashboardContainerTechStack";
import { DashboardContainerFlux } from "containers/Dashboard/sections/DashboardContainerFlux";
import { DashboardContainerCode } from "containers/Dashboard/sections/DashboardContainerCode";
import { DashboardContainerCommits } from "containers/Dashboard/sections/DashboardContainerCommits";
import { DashboardContainerIp } from "containers/Dashboard/sections/DashboardContainerIp";
import { DashboardContainerUserAgent } from "containers/Dashboard/sections/DashboardContainerUserAgent";
import { DashboardContainerPoweredBy } from "containers/Dashboard/sections/DashboardContainerPoweredBy";

import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/screens/ConsoleTvDesktopAndTablet";
import { catchPhrase } from "containers/Dashboard/config";
import {
  dashboardContainerBottomInnerContainerDefaultThemeClasses,
  dashboardContainerTopInnerContainerDefaultThemeClasses
} from "containers/Dashboard/styles";

const DashboardContainerTvAndDesktop: React.FC = () => (
  <Responsive devices={[Device.Tv, Device.Desktop]}>
    <DashboardOuterContainer>
      <DashboardInnerContainer
        themeClasses={dashboardContainerTopInnerContainerDefaultThemeClasses}
      >
        <DashboardContainerTechStack />
        <DashboardContainerFlux />
        <DashboardContainerCode />
      </DashboardInnerContainer>

      <ConsoleTvDesktopAndTablet>{catchPhrase}</ConsoleTvDesktopAndTablet>

      <DashboardInnerContainer
        themeClasses={dashboardContainerBottomInnerContainerDefaultThemeClasses}
      >
        <DashboardContainerCommits />
        <DashboardContainerPoweredBy />
        <DashboardContainerUserAgent />
        <DashboardContainerIp />
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  </Responsive>
);

export { DashboardContainerTvAndDesktop };
