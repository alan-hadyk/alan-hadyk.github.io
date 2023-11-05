import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { ICompanyDescriptionSectionProps } from "@app/components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import { companyDescriptionSectionDefaultThemeClasses } from "@app/components/molecules/CompanyDescriptionSection/styles";

const CompanyDescriptionSection: React.FC<ICompanyDescriptionSectionProps> = ({
  children,
  themeClasses,
  title,
}) => (
  <LayoutContainer themeClasses={themeClasses}>
    {title && (
      <Typography
        themeClasses={companyDescriptionSectionDefaultThemeClasses.title}
      >
        {title}
      </Typography>
    )}

    <LayoutContainer
      themeClasses={companyDescriptionSectionDefaultThemeClasses.contentWrapper}
    >
      {children}
    </LayoutContainer>
  </LayoutContainer>
);

export { CompanyDescriptionSection };
