import { ConsoleMobile } from "components/molecules/Console/screens/ConsoleMobile";
import { Responsive } from "components/layout/Responsive/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";

const DashboardContainerMobile: React.FC = () => (
  <Responsive devices={[Device.Mobile]}>
    <LayoutContainer themeClasses={{ paddingTop: "pt-96" }}>
      <ConsoleMobile>
        Vision driven change agent with career-long record of front-end user
        strategy and UI development
      </ConsoleMobile>
    </LayoutContainer>
  </Responsive>
);

export { DashboardContainerMobile };
