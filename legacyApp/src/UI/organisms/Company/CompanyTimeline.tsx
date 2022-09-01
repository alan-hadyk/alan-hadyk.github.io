import PropTypes from "prop-types";

import Timeline from "UI/molecules/Timeline";
import PositionContainer from "UI/layout/PositionContainer";

import spacing from "styles/variables/spacing";

import { CompanyTimelineProps } from "UI/organisms/Company/__typings__/CompanyTimeline";

const CompanyTimeline = ({
  timelineBottom = "negativeSpacing16"
}: CompanyTimelineProps): JSX.Element => (
  <PositionContainer
    bottom={timelineBottom}
    dataTestId="CompanyTimeline"
    left="50%"
    position="absolute"
    top="spacing16"
    transform="translateX(-50%)"
  >
    <Timeline />
  </PositionContainer>
);

CompanyTimeline.propTypes = {
  timelineBottom: PropTypes.oneOf([...Object.keys(spacing)])
};

export default CompanyTimeline;
