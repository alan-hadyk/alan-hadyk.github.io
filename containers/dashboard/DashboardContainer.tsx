import { Section } from "components/molecules/Section";
import { DashboardContainerTvAndDesktop } from "containers/dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "containers/dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "containers/dashboard/screens/DashboardContainerMobile";

const DashboardContainer: React.FC = () => (
  <Section dataCy="Dashboard" id="dashboard" marginBottom="mb-12">
    <DashboardContainerTvAndDesktop />
    <DashboardContainerTablet />
    <DashboardContainerMobile />
  </Section>
);

export { DashboardContainer };
