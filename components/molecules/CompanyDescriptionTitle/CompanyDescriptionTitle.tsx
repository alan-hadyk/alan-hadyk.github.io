import { Typography } from "components/atoms/Typography/Typography";
import { ICompanyDescriptionTitleProps } from "components/molecules/CompanyDescriptionTitle/@types/CompanyDescriptionTitle";

const CompanyDescriptionTitle: React.FC<ICompanyDescriptionTitleProps> = ({
  children,
  themeClasses
}) => (
  <Typography
    themeClasses={{
      color: "text-white",
      fontFamily: "font-anonymousPro",
      fontSize: "text-36",
      lineHeight: "leading-56",
      textAlign: "text-left",
      ...themeClasses
    }}
  >
    {children}
  </Typography>
);

export { CompanyDescriptionTitle };
