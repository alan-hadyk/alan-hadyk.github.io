import { Section } from "components/molecules/Section/Section";
import { DashboardContainerTvAndDesktop } from "containers/dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "containers/dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "containers/dashboard/screens/DashboardContainerMobile";
import { IDashboardContainerProps } from "containers/dashboard/@types/DashboardContainer";
import { DashboardContainerPdf } from "containers/dashboard/screens/DashboardContainerPdf";

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  format = "web"
}) => (
  <Section
    id="dashboard"
    themeClasses={{
      marginBottom: format === "web" ? "mb-12" : "mb-28"
    }}
  >
    {format === "web" && (
      <>
        <DashboardContainerTvAndDesktop />
        <DashboardContainerTablet />
        <DashboardContainerMobile />
      </>
    )}
    {format === "pdf" && <DashboardContainerPdf />}
  </Section>
);

export { DashboardContainer };
