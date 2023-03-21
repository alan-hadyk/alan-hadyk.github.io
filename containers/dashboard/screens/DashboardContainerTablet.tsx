import { DashboardInnerContainer } from "containers/dashboard/components/DashboardInnerContainer";
import { DashboardOuterContainer } from "containers/dashboard/components/DashboardOuterContainer";
import { TechStack } from "containers/dashboard/components/TechStack";
import { Commits } from "containers/dashboard/components/Commits";
import { PoweredBy } from "containers/dashboard/components/PoweredBy";

import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/screens/ConsoleTvDesktopAndTablet";

const DashboardContainerTablet: React.FC = () => (
  <Responsive devices={[Device.Tablet]}>
    <DashboardOuterContainer>
      <DashboardInnerContainer
        height="h-[calc(17vh+3.6rem)]"
        marginTop="mt-[2.22vh]"
      >
        <TechStack />
      </DashboardInnerContainer>

      <ConsoleTvDesktopAndTablet>
        Vision driven change agent with career-long record of front-end user
        strategy and UI development
      </ConsoleTvDesktopAndTablet>

      <DashboardInnerContainer
        height="h-[calc(22.6vh+3.6rem)]"
        marginBottom="mb-[2.22vh]"
      >
        <Commits />
        <PoweredBy />
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  </Responsive>
);

export { DashboardContainerTablet };