import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { LargeIcon } from "@app/components/molecules/LargeIcon/LargeIcon";

const DashboardContainerPoweredBy: React.FC = () => (
  <ContentFrame
    title="Powered by"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]",
      },
    }}
    variant={ContentFrameVariant.Corners}
  >
    <LargeIcon iconName={ImageDynamicName.NextJS} />
  </ContentFrame>
);

export { DashboardContainerPoweredBy };
