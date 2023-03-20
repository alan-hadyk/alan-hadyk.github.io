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
    <LargeIcon iconName="nextJs" />
  </ContentFrame>
);

export { PoweredBy };
