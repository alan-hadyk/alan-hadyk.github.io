import { ConsoleTextVariant } from "components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer";

const ConsoleMobile: React.FC = () => (
  <LayoutContainer paddingTop="pt-48">
    <LayoutContainer
      className={`
        bg-blue700/75
        border-1 border-solid border-blue300
        shadow-console
      `}
      padding="p-16"
    >
      <ConsoleText variant={ConsoleTextVariant.Mobile} />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleMobile };
