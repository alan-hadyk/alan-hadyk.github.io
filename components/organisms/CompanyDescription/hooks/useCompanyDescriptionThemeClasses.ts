import {
  CompanyDescriptionSize,
  ICompanyDescriptionProps
} from "components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  companyDescriptionIconsWithLabelsContainerDefaultThemeClasses,
  mapCompanyDescriptionSizeToIconsWithLabelContainerStyles
} from "components/organisms/CompanyDescription/styles";
import { IThemeClasses } from "types/theme";

const useCompanyDescriptionThemeClasses = ({
  size = CompanyDescriptionSize.Large
}: Pick<ICompanyDescriptionProps, "size">) => {
  const companyDescriptionIconsWithLabelsContainerThemeClasses: IThemeClasses =
    {
      ...companyDescriptionIconsWithLabelsContainerDefaultThemeClasses,
      ...mapCompanyDescriptionSizeToIconsWithLabelContainerStyles[size]
    };

  return { companyDescriptionIconsWithLabelsContainerThemeClasses };
};

export { useCompanyDescriptionThemeClasses };
