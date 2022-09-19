import { ConsoleText } from "components/atoms/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer";

const ConsoleMobile: React.FC = () => (
  <LayoutContainer dataCy="ConsoleMobile" paddingTop="pt-48">
    <LayoutContainer
      className={`
        bg-blue700/75
        border-1 border-solid border-blue300
        shadow-console
      `}
      dataCy="ConsoleMobileContainer"
      padding="p-16"
    >
      <ConsoleText
        fontSize="text-32"
        height="after:h-24"
        lineHeight="leading-36"
        transform="after:translate-y-[1px]"
        width="after:w-12"
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleMobile };
