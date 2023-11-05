import { Section } from "@app/components/molecules/Section/Section";
import { DashboardContainerTvAndDesktop } from "@app/containers/dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "@app/containers/dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "@app/containers/dashboard/screens/DashboardContainerMobile";

export const DashboardContainer: React.FC = () => (
  <Section
    id="dashboard"
    themeClasses={{
      paddingTop: "pt-0",
    }}
  >
    <DashboardContainerTvAndDesktop />
    <DashboardContainerTablet />
    <DashboardContainerMobile />
  </Section>
);
