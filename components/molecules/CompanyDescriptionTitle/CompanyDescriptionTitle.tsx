import { Typography } from "components/atoms/Typography/Typography";
import {
  CompanyDescriptionTitleSize,
  CompanyDescriptionTitleVariant,
  ICompanyDescriptionTitleProps
} from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import { useCompanyDescriptionTitleThemeClasses } from "components/molecules/CompanyDescriptionTitle/hooks/useCompanyDescriptionTitleThemeClasses";

const CompanyDescriptionTitle: React.FC<ICompanyDescriptionTitleProps> = ({
  children,
  size = CompanyDescriptionTitleSize.Large,
  themeClasses,
  variant = CompanyDescriptionTitleVariant.Light
}) => {
  const { companyDescriptionTitleThemeClasses } =
    useCompanyDescriptionTitleThemeClasses({ size, themeClasses, variant });

  return (
    <Typography themeClasses={companyDescriptionTitleThemeClasses}>
      {children}
    </Typography>
  );
};

export { CompanyDescriptionTitle };
