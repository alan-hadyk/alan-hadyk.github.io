import { ConsoleMobile } from "components/molecules/Console/ConsoleMobile";
import { Responsive } from "components/layout/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { Device } from "components/layout/@types/Responsive";

const DashboardContainerMobile: React.FC = () => (
  <Responsive devices={[Device.MOBILE]}>
    <LayoutContainer paddingTop="pt-96">
      <ConsoleMobile />
    </LayoutContainer>
  </Responsive>
);

export { DashboardContainerMobile };
