import { Typography } from "components/atoms/Typography/Typography";
import { Link } from "components/molecules/Link";

import { ICommitProps } from "components/molecules/@types/Commit";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const Commit: React.FC<ICommitProps> = ({ date, delay, htmlUrl, sha }) => (
  <LayoutContainer
    themeClasses={{
      alignItems: "items-center",
      borderTopColor: "border-t-blue400",
      borderWidth: "border-t-thin",
      display: "hidden",
      mediaQuery: [
        "screenHeight800:h-[2.26vh]",
        "screenHeight800:[&:nth-child(-n+10)]:flex",
        "screenHeight401/799:h-[4.52vh]",
        "screenHeight401/799:[&:nth-child(-n+5)]:flex",
        "screenMaxHeight400:h-[7.53vh]",
        "screenMaxHeight400:[&:nth-child(-n+3)]:flex"
      ],
      pseudoClasses: ["first:border-t-0"],
      width: "w-100%"
    }}
  >
    <LayoutContainer
      themeClasses={{
        paddingY: "py-4",
        width: "w-100%"
      }}
    >
      <LayoutContainer
        themeClasses={{
          alignItems: "items-center",
          display: "flex",
          flexFlow: "flex-row-nowrap",
          justifyContent: "justify-between"
        }}
      >
        <LayoutContainer
          themeClasses={{
            flex: "flex-[0_0_61%]",
            overflow: "overflow-hidden"
          }}
        >
          <Link href={htmlUrl} isExternal>
            <Typography
              ellipsis
              shouldShuffle
              shuffleDelay={delay}
              themeClasses={{
                color: "text-blue100",
                fontSize: "text-8",
                textTransform: "uppercase"
              }}
            >
              {sha}
            </Typography>
          </Link>
        </LayoutContainer>
        <LayoutContainer
          themeClasses={{
            flex: "flex-[0_0_29%]"
          }}
        >
          <Typography
            ellipsis
            themeClasses={{
              fontSize: "text-8"
            }}
          >
            {date}
          </Typography>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { Commit };
