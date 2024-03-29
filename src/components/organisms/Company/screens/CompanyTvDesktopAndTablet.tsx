import { CompanyDescription } from "@app/components/organisms/CompanyDescription/CompanyDescription";
import { CompanyTimeline } from "@app/components/molecules/CompanyTimeline/CompanyTimeline";
import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";

import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import {
  companyDesktopCompanyDescriptionContainerDefaultThemeClasses,
  companyBasicContainerDefaultThemeClasses,
} from "@app/components/organisms/Company/styles";
import { CompanyName } from "@app/components/molecules/CompanyName/CompanyName";
import { CompanyNameFormat } from "@app/components/molecules/CompanyName/@types/CompanyName";

const CompanyTvDesktopAndTablet: React.FC<ICompanyProps> = ({
  date,
  link,
  name,
  position,
  projects,
  themeClasses,
}) => (
  <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
    <LayoutContainer themeClasses={companyBasicContainerDefaultThemeClasses}>
      <CompanyTimeline themeClasses={themeClasses?.timeline} />
      <CompanyName format={CompanyNameFormat.TvDesktopAndTablet}>
        {name}
      </CompanyName>

      <LayoutContainer
        themeClasses={
          companyDesktopCompanyDescriptionContainerDefaultThemeClasses
        }
      >
        <CompanyDescription
          date={date}
          link={link}
          projects={projects}
          themeClasses={themeClasses?.companyDescription}
          position={position}
        />
      </LayoutContainer>
    </LayoutContainer>
  </Responsive>
);

export { CompanyTvDesktopAndTablet };
