import { DashboardElement } from "components/molecules/DashboardElement";
import { AnimatedIcons } from "components/molecules/AnimatedIcons";

const TechStack: React.FC = () => (
  <DashboardElement
    flex="flex-[1_0_40%]"
    shouldDisplayCorners
    title="Tech Stack"
  >
    <AnimatedIcons />
  </DashboardElement>
);

export { TechStack };
