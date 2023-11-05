import { Section } from "@app/components/molecules/Section/Section";
import { DashboardContainerDesktop } from "@app/containers/dashboard/screens/DashboardContainerDesktop";
import { DashboardContainerMobile } from "@app/containers/dashboard/screens/DashboardContainerMobile";

export const DashboardContainer: React.FC = () => (
  <Section
    id="dashboard"
    themeClasses={{
      paddingTop: "pt-0",
    }}
  >
    <DashboardContainerDesktop />
    <DashboardContainerMobile />
  </Section>
);
