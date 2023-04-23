import { CompanyDescriptionSize } from "components/organisms/CompanyDescription/@types/CompanyDescription";
import { IThemeClasses } from "types/theme";

export const companyDescriptionContainerDefaultThemeClasses: IThemeClasses = {
  mediaQuery: ["msHighContrastNone:w-100%", "msHighContrastActive:w-100%"]
};

export const outstandingVerticalIconsWithLabelsDefaultThemeClasses: IThemeClasses =
  {
    display: "flex",
    flexFlow: "flex-col-nowrap",
    gap: "gap-16",
    marginY: "my-32"
  };

export const mapCompanyDescriptionSizeToOutstandingVerticalIconsWithLabelsStyles: Record<
  CompanyDescriptionSize,
  IThemeClasses
> = {
  [CompanyDescriptionSize.Medium]: {
    gap: "gap-8",
    marginY: "my-16"
  },
  [CompanyDescriptionSize.Large]: {
    gap: "gap-16",
    marginY: "my-32"
  }
};
