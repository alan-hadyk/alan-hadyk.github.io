import { Typography } from "components/atoms/Typography/Typography";
import { ICompanyDescriptionTitleProps } from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";
import { companyDescriptionTitleDefaultThemeClasses } from "components/molecules/CompanyDescriptionTitle/styles";

const CompanyDescriptionTitle: React.FC<ICompanyDescriptionTitleProps> = ({
  children,
  themeClasses
}) => (
  <Typography
    themeClasses={{
      ...companyDescriptionTitleDefaultThemeClasses,
      ...themeClasses
    }}
  >
    {children}
  </Typography>
);

export { CompanyDescriptionTitle };
