import { Timeline } from "components/molecules/Timeline";
import { ICompanyTimelineProps } from "components/molecules/@types/CompanyTimeline";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const CompanyTimeline: React.FC<ICompanyTimelineProps> = ({
  timelineBottom = "bottom-[-2rem]"
}) => (
  <LayoutContainer
    themeClasses={{
      bottom: timelineBottom,
      left: "left-50%",
      position: "absolute",
      top: "top-20",
      translate: "translate-x-[-50%]"
    }}
  >
    <Timeline />
  </LayoutContainer>
);

export { CompanyTimeline };
