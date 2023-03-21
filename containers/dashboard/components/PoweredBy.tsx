import { IconDynamicName } from "components/atoms/IconDynamic/@types/IconDynamic";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { LargeIcon } from "components/molecules/LargeIcon/LargeIcon";

const PoweredBy: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="Powered by"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]"
      }
    }}
  >
    <LargeIcon iconName={IconDynamicName.NextJS} />
  </ContentFrame>
);

export { PoweredBy };
