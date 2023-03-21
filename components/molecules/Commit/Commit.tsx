import { Typography } from "components/atoms/Typography/Typography";
import { Link } from "components/molecules/Link/Link";

import { ICommitProps } from "components/molecules/Commit/@types/Commit";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  commitDateContainerDefaultThemeClasses,
  commitDateDefaultThemeClasses,
  commitDefaultThemeClasses,
  commitInnerContainerDefaultThemeClasses,
  commitOuterContainerDefaultThemeClasses,
  commitShaContainerDefaultThemeClasses,
  commitShaDefaultThemeClasses
} from "components/molecules/Commit/styles";

const Commit: React.FC<ICommitProps> = ({ date, delay, htmlUrl, sha }) => (
  <LayoutContainer themeClasses={commitDefaultThemeClasses}>
    <LayoutContainer themeClasses={commitOuterContainerDefaultThemeClasses}>
      <LayoutContainer themeClasses={commitInnerContainerDefaultThemeClasses}>
        <LayoutContainer themeClasses={commitShaContainerDefaultThemeClasses}>
          <Link href={htmlUrl} isExternal>
            <Typography
              ellipsis
              shouldShuffle
              shuffleDelay={delay}
              themeClasses={commitShaDefaultThemeClasses}
            >
              {sha}
            </Typography>
          </Link>
        </LayoutContainer>
        <LayoutContainer themeClasses={commitDateContainerDefaultThemeClasses}>
          <Typography ellipsis themeClasses={commitDateDefaultThemeClasses}>
            {date}
          </Typography>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { Commit };
