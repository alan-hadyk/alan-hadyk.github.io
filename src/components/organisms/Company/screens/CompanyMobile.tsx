import { CompanyDescription } from "@app/components/organisms/CompanyDescription/CompanyDescription";
import { Responsive } from "@app/components/layout/Responsive/Responsive";

import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { companyMobileContainerDefaultThemeClasses } from "@app/components/organisms/Company/styles";
import { CompanyName } from "@app/components/molecules/CompanyName/CompanyName";
import { CompanyNameFormat } from "@app/components/molecules/CompanyName/@types/CompanyName";

const CompanyMobile: React.FC<ICompanyProps> = ({
  date,
  link,
  name,
  projects,
  themeClasses,
  title,
}) => (
  <Responsive devices={[Device.Mobile]}>
    <LayoutContainer themeClasses={companyMobileContainerDefaultThemeClasses}>
      <CompanyName format={CompanyNameFormat.Mobile}>{name}</CompanyName>

      <CompanyDescription
        date={date}
        link={link}
        projects={projects}
        themeClasses={{
          ...themeClasses?.companyDescription,
          position: {
            textAlign: "text-center",
            ...themeClasses?.companyDescription?.position,
          },
        }}
        position={title}
      />
    </LayoutContainer>
  </Responsive>
);

export { CompanyMobile };
