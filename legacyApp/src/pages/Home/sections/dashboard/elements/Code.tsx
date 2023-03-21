import DashboardElement from "UI/molecules/DashboardElement";
import TypingAnimation from "UI/molecules/TypingAnimation";

const Code = (): JSX.Element => (
  <DashboardElement dataCy="Code" dataTestId="Code" flex="0 1 30%" title="Code">
    <TypingAnimation />
  </DashboardElement>
);

export default Code;
