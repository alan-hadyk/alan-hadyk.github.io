import { Section } from "components/molecules/Section";
import { DashboardContainerTvAndDesktop } from "containers/dashboard/screens/DashboardContainerTvAndDesktop";

const DashboardContainer: React.FC = () => (
  <Section dataCy="Dashboard" id="dashboard" marginBottom="mb-12">
    <DashboardContainerTvAndDesktop />
    {/* <DashboardContainerTablet />
    <DashboardContainerMobile /> */}
  </Section>
);

export { DashboardContainer };
