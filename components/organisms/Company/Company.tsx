import { CompanyTvDesktopAndTablet } from "components/organisms/Company/CompanyTvDesktopAndTablet";
import { CompanyMobile } from "components/organisms/Company/CompanyMobile";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const Company: React.FC<ICompanyProps> = ({
  companyMobilePaddingBottom,
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title
}) => (
  <LayoutContainer>
    <LayoutContainer
      themeClasses={{
        position: "relative",
        width: "w-100%"
      }}
    >
      <CompanyTvDesktopAndTablet
        date={date}
        iconsWithLabels={iconsWithLabels}
        link={link}
        name={name}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={companyMobilePaddingBottom}
        themeClasses={themeClasses}
        title={title}
      />

      <CompanyMobile
        date={date}
        iconsWithLabels={iconsWithLabels}
        link={link}
        name={name}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={companyMobilePaddingBottom}
        title={title}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { Company };
