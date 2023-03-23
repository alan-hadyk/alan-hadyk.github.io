import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { CompanyTvDesktopAndTablet } from "components/organisms/Company/screens/CompanyTvDesktopAndTablet";
import { CompanyMobile } from "components/organisms/Company/screens/CompanyMobile";
import { companyContainerDefaultThemeClasses } from "components/organisms/Company/styles";

const Company: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title
}) => (
  <LayoutContainer>
    <LayoutContainer themeClasses={companyContainerDefaultThemeClasses}>
      <CompanyTvDesktopAndTablet
        date={date}
        iconsWithLabels={iconsWithLabels}
        link={link}
        name={name}
        responsibilities={responsibilities}
        themeClasses={themeClasses}
        title={title}
      />

      <CompanyMobile
        date={date}
        iconsWithLabels={iconsWithLabels}
        link={link}
        name={name}
        responsibilities={responsibilities}
        themeClasses={themeClasses}
        title={title}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { Company };
