import { CompanyDescriptionIconWithLabelVariant } from "components/molecules/CompanyDescriptionIconWithLabel/@types/CompanyDescriptionIconWithLabel";
import { CompanyDescriptionResponsibilitiesVariant } from "components/molecules/CompanyDescriptionResponsibilities/@types/CompanyDescriptionResponsibilities";
import { CompanyDescriptionTitleVariant } from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import { TechStackVariant } from "components/molecules/TechStack/@types/TechStack";
import { CompanyDescriptionVariant } from "components/organisms/CompanyDescription/@types/CompanyDescription";

export const mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant: Record<
  CompanyDescriptionVariant,
  CompanyDescriptionTitleVariant
> = {
  [CompanyDescriptionVariant.Blue]: CompanyDescriptionTitleVariant.Light,
  [CompanyDescriptionVariant.Dark]: CompanyDescriptionTitleVariant.Dark
};

export const mapCompanyDescriptionVariantToCompanyDescriptionIconWithLabelVariant: Record<
  CompanyDescriptionVariant,
  CompanyDescriptionIconWithLabelVariant
> = {
  [CompanyDescriptionVariant.Blue]: CompanyDescriptionIconWithLabelVariant.Blue,
  [CompanyDescriptionVariant.Dark]: CompanyDescriptionIconWithLabelVariant.Dark
};

export const mapCompanyDescriptionVariantToTechStackVariant: Record<
  CompanyDescriptionVariant,
  TechStackVariant
> = {
  [CompanyDescriptionVariant.Blue]: TechStackVariant.Blue,
  [CompanyDescriptionVariant.Dark]: TechStackVariant.Dark
};

export const mapCompanyDescriptionVariantToCompanyDescriptionResponsibilitiesVariant: Record<
  CompanyDescriptionVariant,
  CompanyDescriptionResponsibilitiesVariant
> = {
  [CompanyDescriptionVariant.Blue]:
    CompanyDescriptionResponsibilitiesVariant.Blue,
  [CompanyDescriptionVariant.Dark]:
    CompanyDescriptionResponsibilitiesVariant.Dark
};
