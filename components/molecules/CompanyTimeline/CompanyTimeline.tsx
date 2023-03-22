import { Timeline } from "components/molecules/Timeline/Timeline";
import { ICompanyTimelineProps } from "components/molecules/CompanyTimeline/@types/CompanyTimeline";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IThemeClasses } from "types/theme";
import { companyTimelineDefaultThemeClasses } from "components/molecules/CompanyTimeline/styles";

const CompanyTimeline: React.FC<ICompanyTimelineProps> = ({ themeClasses }) => {
  const companyTimelineThemeClasses: IThemeClasses = {
    ...companyTimelineDefaultThemeClasses,
    ...themeClasses
  };

  return (
    <LayoutContainer themeClasses={companyTimelineThemeClasses}>
      <Timeline />
    </LayoutContainer>
  );
};

export { CompanyTimeline };
