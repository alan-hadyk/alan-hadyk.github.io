import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { Earth } from "components/molecules/Earth/Earth";
import { dashboardContainerIpDefaultThemeClasses } from "containers/dashboard/styles";

const DashboardContainerIp: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="IP: 127.0.0.1"
    themeClasses={dashboardContainerIpDefaultThemeClasses}
  >
    <Earth />
  </ContentFrame>
);

export { DashboardContainerIp };
