import { CompanyDescriptionSection } from "components/molecules/CompanyDescriptionSection/CompanyDescriptionSection";
import {
  CompanyResponsibilitiesSize,
  CompanyResponsibilitiesVariant,
  ICompanyResponsibilitiesProps
} from "components/molecules/CompanyResponsibilities/@types/CompanyResponsibilities";
import {
  mapCompanyResponsibilitiesSizeToCompanyDescriptionSectionSize,
  mapCompanyResponsibilitiesSizeToUnorderedListSize,
  mapCompanyResponsibilitiesVariantToCompanyDescriptionSectionVariant,
  mapCompanyResponsibilitiesVariantToUnorderedListVariant
} from "components/molecules/CompanyResponsibilities/config";
import { mapCompanyResponsibilitiesSizeToStyles } from "components/molecules/CompanyResponsibilities/styles";
import { UnorderedList } from "components/molecules/UnorderedList/UnorderedList";

const CompanyResponsibilities: React.FC<ICompanyResponsibilitiesProps> = ({
  responsibilities,
  size = CompanyResponsibilitiesSize.Large,
  themeClasses,
  variant = CompanyResponsibilitiesVariant.Blue
}) => {
  const companyResponsibilitiesThemeClasses = {
    ...mapCompanyResponsibilitiesSizeToStyles[size],
    ...themeClasses
  };

  return (
    <CompanyDescriptionSection
      size={mapCompanyResponsibilitiesSizeToCompanyDescriptionSectionSize[size]}
      themeClasses={companyResponsibilitiesThemeClasses}
      title="Responsibilities"
      variant={
        mapCompanyResponsibilitiesVariantToCompanyDescriptionSectionVariant[
          variant
        ]
      }
    >
      <UnorderedList
        items={responsibilities}
        size={mapCompanyResponsibilitiesSizeToUnorderedListSize[size]}
        variant={
          mapCompanyResponsibilitiesVariantToUnorderedListVariant[variant]
        }
      />
    </CompanyDescriptionSection>
  );
};

export { CompanyResponsibilities };
