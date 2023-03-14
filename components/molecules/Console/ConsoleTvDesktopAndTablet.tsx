import { ConsoleTextVariant } from "components/atoms/ConsoleText/@types/ConsoleText";
import { ConsoleText } from "components/atoms/ConsoleText/ConsoleText";
import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer";

const ConsoleTvDesktopAndTablet: React.FC = () => (
  <LayoutContainer
    className="translate-y-[-50%]"
    left="left-0"
    position="absolute"
    right="right-0"
    top="top-50%"
    zIndex="z-300"
  >
    <LayoutContainer
      alignItems="items-center"
      className={`
        border-1 border-solid border-blue300
        shadow-console
      bg-blue700/75
        min-h-[26.6vh]
        py-[1.11vh] px-[0.62vw]

        msHighContrastNone:after:content-['']
        msHighContrastNone:after:text-0
        msHighContrastNone:after:min-h-inherit

        msHighContrastActive:after:content-['']
        msHighContrastActive:after:text-0
        msHighContrastActive:after:min-h-inherit
      `}
      display="flex"
      height="h-[26.6%]"
      justifyContent="justify-center"
      position="relative"
      width="w-100%"
    >
      <LayoutContainer
        className="translate-y-[-100%]"
        left="left-0"
        position="absolute"
        top="top-0"
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
