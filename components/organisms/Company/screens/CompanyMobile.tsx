import { CompanyDescription } from "components/organisms/CompanyDescription/CompanyDescription";
import { Responsive } from "components/layout/Responsive/Responsive";

import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { companyMobileContainerDefaultThemeClasses } from "components/organisms/Company/styles";
import { CompanyName } from "components/molecules/CompanyName/CompanyName";
import { CompanyNameDevices } from "components/molecules/CompanyName/@types/CompanyName";

const CompanyMobile: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title
}) => (
  <Responsive devices={[Device.Mobile]}>
    <LayoutContainer themeClasses={companyMobileContainerDefaultThemeClasses}>
      <CompanyName devices={CompanyNameDevices.Mobile}>{name}</CompanyName>

      <CompanyDescription
        date={date}
        iconsWithLabels={iconsWithLabels}
        link={link}
        responsibilities={responsibilities}
        themeClasses={{
          ...themeClasses?.companyDescription,
          title: {
            textAlign: "text-center",
            ...themeClasses?.companyDescription?.title
          }
        }}
        title={title}
      />
    </LayoutContainer>
  </Responsive>
);

export { CompanyMobile };
