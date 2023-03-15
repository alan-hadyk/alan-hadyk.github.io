import { DashboardInnerContainer } from "containers/dashboard/components/DashboardInnerContainer";
import { DashboardOuterContainer } from "containers/dashboard/components/DashboardOuterContainer";
import { TechStack } from "containers/dashboard/components/TechStack";
import { Flux } from "containers/dashboard/components/Flux";
import { Code } from "containers/dashboard/components/Code";
import { Commits } from "containers/dashboard/components/Commits";
import { Ip } from "containers/dashboard/components/Ip";
import { UserAgent } from "containers/dashboard/components/UserAgent";
import { PoweredBy } from "containers/dashboard/components/PoweredBy";

import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/screens/ConsoleTvDesktopAndTablet";

const DashboardContainerTvAndDesktop: React.FC = () => (
  <Responsive devices={[Device.TV, Device.DESKTOP]}>
    <DashboardOuterContainer>
      <DashboardInnerContainer
        height="h-[calc(17vh+3.6rem)]"
        marginTop="mt-[2.22vh]"
      >
        <TechStack />
        <Flux />
        <Code />
      </DashboardInnerContainer>

      <ConsoleTvDesktopAndTablet />

      <DashboardInnerContainer
        height="h-[calc(22.6vh+3.6rem)]"
        marginBottom="mb-[2.22vh]"
      >
        <Commits />
        <PoweredBy />
        <UserAgent />
        <Ip />
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  </Responsive>
);

export { DashboardContainerTvAndDesktop };
