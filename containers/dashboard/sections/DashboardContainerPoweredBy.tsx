import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { LargeIcon } from "components/molecules/LargeIcon/LargeIcon";
import { dashboardContainerPoweredByDefaultThemeClasses } from "containers/dashboard/styles";

const DashboardContainerPoweredBy: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="Powered by"
    themeClasses={dashboardContainerPoweredByDefaultThemeClasses}
  >
    <LargeIcon iconName={IconDynamicName.NextJS} />
  </ContentFrame>
);

export { DashboardContainerPoweredBy };
