import { DashboardElement } from "components/molecules/DashboardElement";
import { TypingAnimation } from "components/molecules/TypingAnimation";

const Code: React.FC = () => (
  <DashboardElement dataCy="Code" flex="flex-[0_1_30%]" title="Code">
    <TypingAnimation />
  </DashboardElement>
);

export { Code };
