import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { companyMobileCompanyDescriptionDefaultThemeClasses } from "components/organisms/Company/styles";
import { ICompanyDescriptionProps } from "components/organisms/CompanyDescription/@types/CompanyDescription";

export const useCompanyThemeClasses = ({
  themeClasses
}: Pick<ICompanyProps, "themeClasses">) => {
  const companyMobileCompanyDescriptionThemeClasses: ICompanyDescriptionProps["themeClasses"] =
    {
      ...companyMobileCompanyDescriptionDefaultThemeClasses,
      ...themeClasses?.companyDescription
    };

  return {
    companyMobileCompanyDescriptionThemeClasses
  };
};
