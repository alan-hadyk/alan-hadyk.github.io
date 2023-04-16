import {
  CompanyDescriptionResponsibilitiesVariant,
  ICompanyDescriptionResponsibilitiesProps
} from "components/molecules/CompanyDescriptionResponsibilities/@types/CompanyDescriptionResponsibilities";
import { companyDescriptionResponsibilitiesTitleDefaultThemeClasses } from "components/molecules/CompanyDescriptionResponsibilities/styles";
import { IThemeClasses } from "types/theme";

const useCompanyDescriptionResponsibilitiesThemeClasses = ({
  variant
}: Pick<ICompanyDescriptionResponsibilitiesProps, "variant">) => {
  const companyDescriptionResponsibilitiesTitleThemeClasses: IThemeClasses = {
    ...companyDescriptionResponsibilitiesTitleDefaultThemeClasses,
    color:
      variant === CompanyDescriptionResponsibilitiesVariant.Blue
        ? "text-blue100"
        : "text-blue600"
  };

  return {
    companyDescriptionResponsibilitiesTitleThemeClasses
  };
};

export { useCompanyDescriptionResponsibilitiesThemeClasses };
