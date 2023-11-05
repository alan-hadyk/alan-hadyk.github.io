import { Typography } from "@app/components/atoms/Typography/Typography";
import { ICompanyPositionProps } from "@app/components/molecules/CompanyPosition/@types/CompanyPosition";
import { companyPositionDefaultThemeClasses } from "@app/components/molecules/CompanyPosition/styles";
import { IThemeClasses } from "@app/types/theme";

export const CompanyPosition: React.FC<ICompanyPositionProps> = ({
  children,
  themeClasses,
}) => {
  const companyPositionThemeClasses: IThemeClasses = {
    ...companyPositionDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <Typography themeClasses={companyPositionThemeClasses}>
      {children}
    </Typography>
  );
};
