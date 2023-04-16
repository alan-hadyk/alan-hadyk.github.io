import { CompanyDescriptionResponsibilitiesVariant } from "components/molecules/CompanyDescriptionResponsibilities/@types/CompanyDescriptionResponsibilities";
import { UnorderedListVariant } from "components/molecules/UnorderedList/@types/UnorderedList";

export const mapCompanyDescriptionResponsibilitiesVariantToUnorderedListVariant: Record<
  CompanyDescriptionResponsibilitiesVariant,
  UnorderedListVariant
> = {
  [CompanyDescriptionResponsibilitiesVariant.Blue]: UnorderedListVariant.Blue,
  [CompanyDescriptionResponsibilitiesVariant.Dark]: UnorderedListVariant.Dark
};
