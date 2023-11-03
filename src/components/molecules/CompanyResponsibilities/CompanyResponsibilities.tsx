import { CompanyDescriptionSection } from "@app/components/molecules/CompanyDescriptionSection/CompanyDescriptionSection";
import { ICompanyResponsibilitiesProps } from "@app/components/molecules/CompanyResponsibilities/@types/CompanyResponsibilities";
import { companyResponsibilitiesDefaultThemeClasses } from "@app/components/molecules/CompanyResponsibilities/styles";
import { UnorderedList } from "@app/components/molecules/UnorderedList/UnorderedList";

const CompanyResponsibilities: React.FC<ICompanyResponsibilitiesProps> = ({
  responsibilities,
  shouldDisplayTitle = true,
  themeClasses,
}) => {
  const companyResponsibilitiesThemeClasses = {
    ...companyResponsibilitiesDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <CompanyDescriptionSection
      themeClasses={companyResponsibilitiesThemeClasses}
      title={shouldDisplayTitle ? "Achievements" : undefined}
    >
      <UnorderedList items={responsibilities} />
    </CompanyDescriptionSection>
  );
};

export { CompanyResponsibilities };
