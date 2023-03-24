import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "components/molecules/TechStack/TechStack";
import { ICompanyDescriptionProps } from "components/organisms/CompanyDescription/@types/CompanyDescription";
import { companyDescriptionContainerDefaultThemeClasses } from "components/organisms/CompanyDescription/styles";
import { CompanyDescriptionTitle } from "components/molecules/CompanyDescriptionTitle/CompanyDescriptionTitle";
import { CompanyDescriptionDate } from "components/molecules/CompanyDescriptionDate/CompanyDescriptionDate";
import { CompanyDescriptionLink } from "components/molecules/CompanyDescriptionLink/CompanyDescriptionLink";
import { CompanyDescriptionResponsibilities } from "components/molecules/CompanyDescriptionResponsibilities/CompanyDescriptionResponsibilities";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  iconsWithLabels,
  link,
  responsibilities,
  themeClasses,
  title
}) => (
  <LayoutContainer
    themeClasses={companyDescriptionContainerDefaultThemeClasses}
  >
    <CompanyDescriptionTitle themeClasses={themeClasses?.title}>
      {title}
    </CompanyDescriptionTitle>

    <CompanyDescriptionDate
      label={date}
      themeClasses={{
        marginBottom: link ? "mb-16" : "mb-32"
      }}
    />

    {link && <CompanyDescriptionLink href={link} />}

    <TechStack iconsWithLabels={iconsWithLabels} />

    <CompanyDescriptionResponsibilities
      responsibilities={responsibilities}
      themeClasses={themeClasses?.responsibilitiesWrapper}
    />
  </LayoutContainer>
);

export { CompanyDescription };
