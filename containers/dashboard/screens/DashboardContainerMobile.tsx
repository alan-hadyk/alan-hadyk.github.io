import { ConsoleMobile } from "components/molecules/Console/screens/ConsoleMobile";
import { Responsive } from "components/layout/Responsive/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { catchPhrase } from "containers/dashboard/config";
import { dashboardContainerMobileDefaultThemeClasses } from "containers/dashboard/styles";

const DashboardContainerMobile: React.FC = () => (
  <Responsive devices={[Device.Mobile]}>
    <LayoutContainer themeClasses={dashboardContainerMobileDefaultThemeClasses}>
      <ConsoleMobile>{catchPhrase}</ConsoleMobile>
    </LayoutContainer>
  </Responsive>
);

export { DashboardContainerMobile };
