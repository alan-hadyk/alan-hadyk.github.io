import {
  CompanyDescriptionSize,
  ICompanyDescriptionProps
} from "components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  outstandingVerticalIconsWithLabelsDefaultThemeClasses,
  mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles
} from "components/organisms/CompanyDescription/styles";
import { IThemeClasses } from "types/theme";

const useCompanyDescriptionThemeClasses = ({
  size = CompanyDescriptionSize.Large
}: Pick<ICompanyDescriptionProps, "size">) => {
  const outstandingVerticalIconsWithLabelsThemeClasses: IThemeClasses = {
    ...outstandingVerticalIconsWithLabelsDefaultThemeClasses,
    ...mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles[size]
  };

  return {
    outstandingVerticalIconsWithLabelsThemeClasses
  };
};

export { useCompanyDescriptionThemeClasses };
