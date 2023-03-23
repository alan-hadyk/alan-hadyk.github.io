import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { HorizontalIcons } from "components/molecules/HorizontalIcons/HorizontalIcons";
import { dashboardContainerTechStackDefaultThemeClasses } from "containers/dashboard/styles";

const DashboardContainerTechStack: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="Tech Stack"
    themeClasses={dashboardContainerTechStackDefaultThemeClasses}
  >
    <HorizontalIcons />
  </ContentFrame>
);

export { DashboardContainerTechStack };
