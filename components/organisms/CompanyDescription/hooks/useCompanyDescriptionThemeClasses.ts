import { ICompanyDescriptionProps } from "components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  companyDescriptionIconWithLabelWrapperDefaultThemeClasses,
  companyDescriptionResponsibilitiesWrapperDefaultThemeClasses,
  companyDescriptionTitleDefaultThemeClasses
} from "components/organisms/CompanyDescription/styles";
import { IThemeClasses } from "types/theme";

export const useCompanyDescriptionThemeClasses = ({
  link,
  themeClasses
}: Pick<ICompanyDescriptionProps, "themeClasses" | "link">) => {
  const companyDescriptionTitleThemeClasses: IThemeClasses = {
    ...companyDescriptionTitleDefaultThemeClasses,
    ...themeClasses?.title
  };

  const companyDescriptionIconWithLabelWrapperThemeClasses: IThemeClasses = {
    ...companyDescriptionIconWithLabelWrapperDefaultThemeClasses,
    marginBottom: link ? "mb-16" : "mb-32"
  };

  const companyDescriptionResponsibilitiesWrapperThemeClasses: IThemeClasses = {
    ...companyDescriptionResponsibilitiesWrapperDefaultThemeClasses,
    ...themeClasses?.responsibilitiesWrapper
  };

  return {
    companyDescriptionIconWithLabelWrapperThemeClasses,
    companyDescriptionResponsibilitiesWrapperThemeClasses,
    companyDescriptionTitleThemeClasses
  };
};
