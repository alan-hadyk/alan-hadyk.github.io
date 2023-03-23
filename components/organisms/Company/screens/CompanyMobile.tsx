import { Typography } from "components/atoms/Typography/Typography";
import { CompanyDescription } from "components/organisms/CompanyDescription/CompanyDescription";
import { Responsive } from "components/layout/Responsive/Responsive";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  companyMobileContainerDefaultThemeClasses,
  companyMobileNameDefaultThemeClasses
} from "components/organisms/Company/styles";
import { useCompanyThemeClasses } from "components/organisms/Company/hooks/useCompanyDescriptionThemeClasses";

const CompanyMobile: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title
}) => {
  const { companyMobileCompanyDescriptionThemeClasses } =
    useCompanyThemeClasses({ themeClasses });

  return (
    <Responsive devices={[Device.Mobile]}>
      <LayoutContainer themeClasses={companyMobileContainerDefaultThemeClasses}>
        <Typography themeClasses={companyMobileNameDefaultThemeClasses}>
          {name}
        </Typography>

        <CompanyDescription
          date={date}
          iconsWithLabels={iconsWithLabels}
          link={link}
          responsibilities={responsibilities}
          themeClasses={companyMobileCompanyDescriptionThemeClasses}
          title={title}
        />
      </LayoutContainer>
    </Responsive>
  );
};

export { CompanyMobile };
