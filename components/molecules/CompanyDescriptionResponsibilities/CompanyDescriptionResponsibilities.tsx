import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ICompanyDescriptionResponsibilitiesProps } from "components/molecules/CompanyDescriptionResponsibilities/@types/CompanyDescriptionResponsibilities";
import { companyDescriptionResponsibilitiesDefaultThemeClasses } from "components/molecules/CompanyDescriptionResponsibilities/styles";
import { UnorderedList } from "components/molecules/UnorderedList/UnorderedList";

const CompanyDescriptionResponsibilities: React.FC<
  ICompanyDescriptionResponsibilitiesProps
> = ({ responsibilities, themeClasses }) => (
  <LayoutContainer
    themeClasses={{
      paddingBottom: "pb-68",
      ...themeClasses
    }}
  >
    <Typography
      themeClasses={companyDescriptionResponsibilitiesDefaultThemeClasses}
    >
      Responsibilities
    </Typography>
    <LayoutContainer
      themeClasses={{
        marginLeft: "ml-16",
        marginTop: "mt-16"
      }}
    >
      <UnorderedList items={responsibilities} />
    </LayoutContainer>
  </LayoutContainer>
);

export { CompanyDescriptionResponsibilities };