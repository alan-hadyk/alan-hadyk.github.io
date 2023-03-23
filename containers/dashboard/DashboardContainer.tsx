import { Section } from "components/molecules/Section/Section";
import { DashboardContainerTvAndDesktop } from "containers/dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "containers/dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "containers/dashboard/screens/DashboardContainerMobile";
import {
  DashboardContainerFormat,
  IDashboardContainerProps
} from "containers/dashboard/@types/DashboardContainer";
import { DashboardContainerPdf } from "containers/dashboard/screens/DashboardContainerPdf";
import { dashboardContainerDefaultThemeClasses } from "containers/dashboard/styles";

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  format = DashboardContainerFormat.Web
}) => (
  <Section id="dashboard" themeClasses={dashboardContainerDefaultThemeClasses}>
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
