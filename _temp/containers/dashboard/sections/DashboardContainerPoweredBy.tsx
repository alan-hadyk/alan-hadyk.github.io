import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";
import { ContentFrameVariant } from "components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { LargeIcon } from "components/molecules/LargeIcon/LargeIcon";

const DashboardContainerPoweredBy: React.FC = () => (
  <ContentFrame
    title="Powered by"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]"
      }
    }}
    variant={ContentFrameVariant.Corners}
  >
    <LargeIcon iconName={IconDynamicName.NextJS} />
  </ContentFrame>
);

export { DashboardContainerPoweredBy };
