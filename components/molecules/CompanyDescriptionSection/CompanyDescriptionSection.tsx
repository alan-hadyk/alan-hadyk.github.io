import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyDescriptionSectionSize,
  CompanyDescriptionSectionVariant,
  ICompanyDescriptionSectionProps
} from "components/molecules/CompanyDescriptionSection/@types/CompanyDescriptionSection";
import { useCompanyDescriptionSectionThemeClasses } from "components/molecules/CompanyDescriptionSection/hooks/useCompanyDescriptionSectionThemeClasses";

const CompanyDescriptionSection: React.FC<ICompanyDescriptionSectionProps> = ({
  children,
  size = CompanyDescriptionSectionSize.Large,
  themeClasses,
  title,
  variant = CompanyDescriptionSectionVariant.Blue
}) => {
  const {
    companyDescriptionSectionContentWrapperThemeClasses,
    companyDescriptionSectionTitleThemeClasses
  } = useCompanyDescriptionSectionThemeClasses({ size, variant });

  return (
    <LayoutContainer themeClasses={themeClasses}>
      <Typography themeClasses={companyDescriptionSectionTitleThemeClasses}>
        {title}
      </Typography>
      <LayoutContainer
        themeClasses={companyDescriptionSectionContentWrapperThemeClasses}
      >
        {children}
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { CompanyDescriptionSection };
