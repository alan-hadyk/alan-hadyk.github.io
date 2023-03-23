import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { TypingAnimation } from "components/molecules/TypingAnimation/TypingAnimation";
import { dashboardContainerCodeDefaultThemeClasses } from "containers/dashboard/styles";

const DashboardContainerCode: React.FC = () => (
  <ContentFrame
    title="Code"
    themeClasses={dashboardContainerCodeDefaultThemeClasses}
  >
    <TypingAnimation />
  </ContentFrame>
);

export { DashboardContainerCode };
