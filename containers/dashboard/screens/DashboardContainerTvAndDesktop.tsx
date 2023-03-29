import { DashboardInnerContainer } from "components/molecules/DashboardInnerContainer/DashboardInnerContainer";
import { DashboardOuterContainer } from "components/molecules/DashboardOuterContainer/DashboardOuterContainer";
import { DashboardContainerTechStack } from "containers/dashboard/sections/DashboardContainerTechStack";
import { DashboardContainerFlux } from "containers/dashboard/sections/DashboardContainerFlux";
import { DashboardContainerCode } from "containers/dashboard/sections/DashboardContainerCode";
import { DashboardContainerCommits } from "containers/dashboard/sections/DashboardContainerCommits";
import { DashboardContainerIp } from "containers/dashboard/sections/DashboardContainerIp";
import { DashboardContainerUserAgent } from "containers/dashboard/sections/DashboardContainerUserAgent";
import { DashboardContainerPoweredBy } from "containers/dashboard/sections/DashboardContainerPoweredBy";

import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/screens/ConsoleTvDesktopAndTablet";
import { catchPhrase } from "containers/dashboard/config";
import {
  dashboardContainerBottomInnerContainerDefaultThemeClasses,
  dashboardContainerTopInnerContainerDefaultThemeClasses
} from "containers/dashboard/styles";

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
