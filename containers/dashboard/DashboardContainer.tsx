import { Section } from "components/molecules/Section/Section";
import { DashboardContainerTvAndDesktop } from "containers/dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "containers/dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "containers/dashboard/screens/DashboardContainerMobile";
import {
  DashboardContainerFormat,
  IDashboardContainerProps
} from "containers/dashboard/@types/DashboardContainer";
import { DashboardContainerPdf } from "containers/dashboard/screens/DashboardContainerPdf";

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  format = DashboardContainerFormat.Web
}) => (
  <Section
    id="dashboard"
    themeClasses={{
      marginBottom: DashboardContainerFormat.Web ? "mb-28" : "mb-12"
    }}
  >
    {format === DashboardContainerFormat.Web && (
      <>
        <DashboardContainerTvAndDesktop />
        <DashboardContainerTablet />
        <DashboardContainerMobile />
      </>
    )}
    {format === DashboardContainerFormat.Pdf && <DashboardContainerPdf />}
  </Section>
);

export { DashboardContainer };
