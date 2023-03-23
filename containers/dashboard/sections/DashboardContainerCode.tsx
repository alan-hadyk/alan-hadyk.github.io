import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { TypingAnimation } from "components/molecules/TypingAnimation/TypingAnimation";

const DashboardContainerCode: React.FC = () => (
  <ContentFrame
    title="Code"
    themeClasses={{
      children: {
        overflow: "overflow-hidden"
      },
      container: {
        flex: "flex-[0_1_30%]"
      }
    }}
  >
    <TypingAnimation />
  </ContentFrame>
);

export { DashboardContainerCode };
