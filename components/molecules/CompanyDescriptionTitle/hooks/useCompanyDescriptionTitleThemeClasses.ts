import { ICompanyDescriptionProps } from "components/organisms/CompanyDescription/@types/CompanyDescription";
import { companyDescriptionTitleDefaultThemeClasses } from "components/organisms/CompanyDescription/styles";
import { IThemeClasses } from "types/theme";

export const useCompanyDescriptionTitleThemeClasses = ({
  themeClasses
}: Pick<ICompanyDescriptionProps, "themeClasses" | "link">) => {
  const companyDescriptionTitleThemeClasses: IThemeClasses = {
    ...companyDescriptionTitleDefaultThemeClasses,
    ...themeClasses?.title
  };

  return {
    companyDescriptionTitleThemeClasses
  };
};
