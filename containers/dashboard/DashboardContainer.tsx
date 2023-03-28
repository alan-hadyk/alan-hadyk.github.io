import { Section } from "components/molecules/Section/Section";
import { DashboardContainerTvAndDesktop } from "containers/Dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "containers/Dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "containers/Dashboard/screens/DashboardContainerMobile";
import {
  DashboardContainerFormat,
  IDashboardContainerProps
} from "containers/Dashboard/@types/DashboardContainer";
import { DashboardContainerPdf } from "containers/Dashboard/screens/DashboardContainerPdf";

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  format = DashboardContainerFormat.Web
}) => (
  <Section
    id="dashboard"
    themeClasses={{
      marginBottom: "mb-12"
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
