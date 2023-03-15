import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { ICompanyTimelineProps } from "components/molecules/@types/CompanyTimeline";
import { ICompanyDescriptionProps } from "components/organisms/@types/CompanyDescription";

export interface ICompanyProps extends ICompanyDescriptionProps {
  companyMobilePaddingBottom?: ILayoutContainerProps["paddingBottom"];
  name: string;
  timelineBottom?: ICompanyTimelineProps["timelineBottom"];
}
