import { ConsoleTextVariant } from "components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const ConsoleTvDesktopAndTablet: React.FC = () => (
  <LayoutContainer
    themeClasses={{
      left: "left-0",
      position: "absolute",
      right: "right-0",
      top: "top-50%",
      translate: "translate-y-[-50%]",
      zIndex: "z-300"
    }}
  >
    <LayoutContainer
      themeClasses={{
        alignItems: "items-center",
        backgroundColor: "bg-blue700/75",
        borderColor: "border-blue300",
        borderStyle: "border-solid",
        borderWidth: "border-1",
        boxShadow: "shadow-console",
        display: "flex",
        height: "h-[26.6%]",
        justifyContent: "justify-center",
        mediaQuery: [
          "msHighContrastNone:after:content-['']",
          "msHighContrastNone:after:text-0",
          "msHighContrastNone:after:min-h-inherit",
          "msHighContrastActive:after:content-['']",
          "msHighContrastActive:after:text-0",
          "msHighContrastActive:after:min-h-inherit"
        ],
        minHeight: "min-h-[26.6vh]",
        paddingX: "px-[0.62vw]",
        paddingY: "py-[1.11vh]",
        position: "relative",
        width: "w-100%"
      }}
    >
      <LayoutContainer
        themeClasses={{
          left: "left-0",
          position: "absolute",
          top: "top-0",
          translate: "translate-y-[-100%]"
        }}
      >
        <Typography
          themeClasses={{
            fontSize: "text-12",
            lineHeight: "leading-28",
            textTransform: "uppercase"
          }}
        >
          GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)
        </Typography>
      </LayoutContainer>

      <ConsoleText variant={ConsoleTextVariant.TvDesktopAndTablet} />
    </LayoutContainer>
  </LayoutContainer>
);

export { ConsoleTvDesktopAndTablet };
