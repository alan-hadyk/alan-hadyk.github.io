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
        themeClasses={{
          fontSize: "text-32",
          lineHeight: "leading-36",
          pseudoClasses: ["after:h-24", "after:translate-y-[1px]", "after:w-12"]
        }}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleMobile };
