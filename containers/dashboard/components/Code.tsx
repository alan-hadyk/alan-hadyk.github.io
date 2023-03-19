import { DashboardElement } from "components/molecules/DashboardElement/DashboardElement";
import { TypingAnimation } from "components/molecules/TypingAnimation";

const Code: React.FC = () => (
  <DashboardElement
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
  </DashboardElement>
);

export { Code };
