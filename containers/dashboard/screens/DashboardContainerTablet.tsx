import { DashboardInnerContainer } from "components/molecules/DashboardInnerContainer/DashboardInnerContainer";
import { DashboardOuterContainer } from "components/molecules/DashboardOuterContainer/DashboardOuterContainer";
import { TechStack } from "containers/dashboard/components/TechStack";
import { Commits } from "containers/dashboard/components/Commits";
import { PoweredBy } from "containers/dashboard/components/PoweredBy";

import { Responsive } from "components/layout/Responsive/Responsive";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { ConsoleTvDesktopAndTablet } from "components/molecules/Console/screens/ConsoleTvDesktopAndTablet";
import { catchPhrase } from "containers/dashboard/config";

const DashboardContainerTablet: React.FC = () => (
  <Responsive devices={[Device.Tablet]}>
    <DashboardOuterContainer>
      <DashboardInnerContainer
        themeClasses={{
          height: "h-[calc(17vh+3.6rem)]",
          marginTop: "mt-[2.22vh]"
        }}
      >
        <TechStack />
      </DashboardInnerContainer>

      <ConsoleTvDesktopAndTablet>{catchPhrase}</ConsoleTvDesktopAndTablet>

      <DashboardInnerContainer
        themeClasses={{
          height: "h-[calc(22.6vh+3.6rem)]",
          marginBottom: "mb-[2.22vh]"
        }}
      >
        <Commits />
        <PoweredBy />
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  </Responsive>
);

export { DashboardContainerTablet };
