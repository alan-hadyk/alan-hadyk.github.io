import { Timeline } from "components/molecules/Timeline";
import { ICompanyTimelineProps } from "components/molecules/@types/CompanyTimeline";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropType } from "helpers/propTypes/spacing";

const CompanyTimeline: React.FC<ICompanyTimelineProps> = ({
  timelineBottom = "bottom-[-2rem]"
}): JSX.Element => (
  <LayoutContainer
    className="translate-x-negative50%"
    bottom={timelineBottom}
    left="left-50%"
    position="absolute"
    top="top-20"
  >
    <Timeline />
  </LayoutContainer>
);

CompanyTimeline.propTypes = {
  timelineBottom: spacingPropType("bottom")
};

export { CompanyTimeline };
