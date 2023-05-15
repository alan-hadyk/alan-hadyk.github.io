import { Section } from "@app/components/molecules/Section/Section";
import { DashboardContainerTvAndDesktop } from "@app/containers/Dashboard/screens/DashboardContainerTvAndDesktop";
import { DashboardContainerTablet } from "@app/containers/Dashboard/screens/DashboardContainerTablet";
import { DashboardContainerMobile } from "@app/containers/Dashboard/screens/DashboardContainerMobile";
import {
  DashboardContainerFormat,
  IDashboardContainerProps,
} from "@app/containers/Dashboard/@types/DashboardContainer";
import { DashboardContainerPdf } from "@app/containers/Dashboard/screens/DashboardContainerPdf";

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  format = DashboardContainerFormat.Web,
}) => (
  <Section
    id="dashboard"
    themeClasses={{
      paddingTop: "pt-0",
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
