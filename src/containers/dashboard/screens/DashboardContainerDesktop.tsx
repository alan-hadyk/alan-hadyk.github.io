import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { ConsoleDesktop } from "@app/components/molecules/Console/screens/ConsoleDesktop";
import { catchPhrase } from "@app/containers/dashboard/config";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

export const DashboardContainerDesktop: React.FC = () => (
  <Responsive devices={[Device.Tablet, Device.Tv, Device.Desktop]}>
    <LayoutContainer
      themeClasses={{
        paddingTop: "pt-96",
      }}
    >
      <ConsoleDesktop>{catchPhrase}</ConsoleDesktop>
    </LayoutContainer>
  </Responsive>
);
