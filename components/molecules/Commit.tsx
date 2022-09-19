import PropTypes from "prop-types";

import { Text } from "components/atoms/Text";
import { Link } from "components/molecules/Link";

import { ICommitProps } from "components/molecules/@types/Commit";
import { LayoutContainer } from "components/layout/LayoutContainer";

const Commit: React.FC<ICommitProps> = ({ date, delay, htmlUrl, sha }) => (
  <LayoutContainer
    alignItems="items-center"
    className={`
      border-t-thin border-t-solid border-t-blue400
      hidden

      screenHeight800:h-[2.26vh]
      screenHeight800:[&:nth-child(-n+10)]:flex

      screenHeight401/799:h-[4.52vh]
      screenHeight401/799:[&:nth-child(-n+5)]:flex

      screenMaxHeight400:h-[7.53vh]
      screenMaxHeight400:[&:nth-child(-n+3)]:flex

      first:border-t-0
    `}
    dataCy="Commit"
    width="w-100%"
  >
    <LayoutContainer paddingTop="pt-4" paddingBottom="pb-4" width="w-100%">
      <LayoutContainer
        alignItems="items-center"
        display="flex"
        flexFlow="flex-row flex-nowrap"
        justifyContent="justify-between"
      >
        <LayoutContainer className="overflow-hidden" flex="flex-[0_0_61%]">
          <Link href={htmlUrl} isExternal>
            <Text
              color="text-blue100"
              ellipsis
              fontSize="text-8"
              shouldShuffle
              shuffleDelay={delay}
              textTransform="uppercase"
            >
              {sha}
            </Text>
          </Link>
        </LayoutContainer>
        <LayoutContainer flex="flex-[0_0_29%]">
          <Text fontSize="text-8" ellipsis>
            {date}
          </Text>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

Commit.propTypes = {
  date: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  sha: PropTypes.string.isRequired
};

export { Commit };
