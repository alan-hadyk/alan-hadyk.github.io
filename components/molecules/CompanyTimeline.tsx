import { Timeline } from "components/molecules/Timeline";
import { ICompanyTimelineProps } from "components/molecules/@types/CompanyTimeline";
import { LayoutContainer } from "components/layout/LayoutContainer";

const CompanyTimeline: React.FC<ICompanyTimelineProps> = ({
  timelineBottom = "bottom-[-2rem]"
}) => (
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

export { CompanyTimeline };
