import { DashboardElement } from "components/molecules/DashboardElement/DashboardElement";
import { AnimatedIcons } from "components/molecules/AnimatedIcons/AnimatedIcons";

const TechStack: React.FC = () => (
  <DashboardElement
    shouldDisplayCorners
    title="Tech Stack"
    themeClasses={{
      container: {
        flex: "flex-[1_0_40%]"
      }
    }}
  >
    <AnimatedIcons />
  </DashboardElement>
);

export { TechStack };
