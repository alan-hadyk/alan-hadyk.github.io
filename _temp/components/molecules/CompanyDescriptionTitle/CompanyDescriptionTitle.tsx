import { Typography } from "components/atoms/Typography/Typography";
import {
  CompanyDescriptionTitleSize,
  CompanyDescriptionTitleVariant,
  ICompanyDescriptionTitleProps
} from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import {
  companyDescriptionTitleDefaultThemeClasses,
  mapCompanyDescriptionTitleVariantToStyles,
  mapCompanyDescriptionTitleSizeToStyles
} from "components/molecules/CompanyDescriptionTitle/styles";
import { IThemeClasses } from "types/theme";

const CompanyDescriptionTitle: React.FC<ICompanyDescriptionTitleProps> = ({
  children,
  size = CompanyDescriptionTitleSize.Large,
  themeClasses,
  variant = CompanyDescriptionTitleVariant.Light
}) => {
  const companyDescriptionTitleThemeClasses: Record<
    "typography",
    IThemeClasses
  > = {
    typography: {
      ...companyDescriptionTitleDefaultThemeClasses,
      ...mapCompanyDescriptionTitleVariantToStyles[variant],
      ...mapCompanyDescriptionTitleSizeToStyles[size],
      ...themeClasses
    }
  };

  return (
    <Typography themeClasses={companyDescriptionTitleThemeClasses.typography}>
      {children}
    </Typography>
  );
};

export { CompanyDescriptionTitle };
