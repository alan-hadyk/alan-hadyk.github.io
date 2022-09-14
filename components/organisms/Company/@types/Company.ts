import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { ICompanyTimelineProps } from "components/molecules/@types/CompanyTimeline";
import { ICompanyDescriptionProps } from "components/organisms/@types/CompanyDescription";

export interface ICompanyProps extends ICompanyDescriptionProps {
  companyMobilePaddingBottom?: ILayoutContainerProps["paddingBottom"];
  dataCy?: string;
  name: string;
  timelineBottom?: ICompanyTimelineProps["timelineBottom"];
}
