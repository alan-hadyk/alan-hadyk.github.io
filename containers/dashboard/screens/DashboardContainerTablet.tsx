import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/ConsoleTvDesktopAndTablet";

import { DashboardInnerContainer } from "containers/dashboard/components/DashboardInnerContainer";
import { DashboardOuterContainer } from "containers/dashboard/components/DashboardOuterContainer";
import { TechStack } from "containers/dashboard/components/TechStack";
import { Commits } from "containers/dashboard/components/Commits";
import { PoweredBy } from "containers/dashboard/components/PoweredBy";

import { Responsive } from "components/layout/Responsive";
import { Device } from "components/layout/@types/Responsive";

const DashboardContainerTablet: React.FC = () => (
  <Responsive dataCy="DashboardContainerTablet" devices={[Device.TABLET]}>
    <DashboardOuterContainer>
      <DashboardInnerContainer
        height="h-[calc(17vh+3.6rem)]"
        marginTop="mt-[2.22vh]"
      >
        <TechStack />
      </DashboardInnerContainer>

      <ConsoleTvDesktopAndTablet />

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
