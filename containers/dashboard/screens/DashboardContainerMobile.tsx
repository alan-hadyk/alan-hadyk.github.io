import { ConsoleMobile } from "components/molecules/Console/screens/ConsoleMobile";
import { Responsive } from "components/layout/Responsive/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { catchPhrase } from "containers/Dashboard/config";

const DashboardContainerMobile: React.FC = () => (
  <Responsive devices={[Device.Mobile]}>
    <LayoutContainer
      themeClasses={{
        paddingTop: "pt-96"
      }}
    >
      <ConsoleMobile>{catchPhrase}</ConsoleMobile>
    </LayoutContainer>
  </Responsive>
);

export { DashboardContainerMobile };
