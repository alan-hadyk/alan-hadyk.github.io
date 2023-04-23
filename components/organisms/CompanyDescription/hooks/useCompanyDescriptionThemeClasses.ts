import {
  CompanyDescriptionSize,
  ICompanyDescriptionProps
} from "components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles,
  companyDescriptionDefaultThemeClasses
} from "components/organisms/CompanyDescription/styles";
import { IThemeClasses } from "types/theme";

const useCompanyDescriptionThemeClasses = ({
  size = CompanyDescriptionSize.Large
}: Pick<ICompanyDescriptionProps, "size">) => {
  const companyDescriptionThemeClasses: Record<
    "outstandingIcons",
    IThemeClasses
  > = {
    outstandingIcons: {
      ...companyDescriptionDefaultThemeClasses.outstandingIcons,
      ...mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles[
        size
      ]
    }
  };

  return {
    companyDescriptionThemeClasses
  };
};

export { useCompanyDescriptionThemeClasses };
