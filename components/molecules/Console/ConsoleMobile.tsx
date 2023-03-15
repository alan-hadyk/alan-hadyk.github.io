import { ConsoleTextVariant } from "components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const ConsoleMobile: React.FC = () => (
  <LayoutContainer themeClasses={{ paddingTop: "pt-48" }}>
    <LayoutContainer
      themeClasses={{
        backgroundColor: "bg-blue700/75",
        borderColor: "border-blue300",
        borderStyle: "border-solid",
        borderWidth: "border-1",
        boxShadow: "shadow-console",
        padding: "p-16"
      }}
    >
      <ConsoleText variant={ConsoleTextVariant.Mobile} />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleMobile };
