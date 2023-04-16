import { Typography } from "components/atoms/Typography/Typography";
import {
  CompanyDescriptionTitleVariant,
  ICompanyDescriptionTitleProps
} from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import {
  companyDescriptionTitleDefaultThemeClasses,
  mapCompanyDescriptionTitleVariantToStyles
} from "components/molecules/CompanyDescriptionTitle/styles";

const CompanyDescriptionTitle: React.FC<ICompanyDescriptionTitleProps> = ({
  children,
  themeClasses,
  variant = CompanyDescriptionTitleVariant.Light
}) => (
  <Typography
    themeClasses={{
      ...companyDescriptionTitleDefaultThemeClasses,
      ...mapCompanyDescriptionTitleVariantToStyles[variant],
      ...themeClasses
    }}
  >
    {children}
  </Typography>
);

export { CompanyDescriptionTitle };
