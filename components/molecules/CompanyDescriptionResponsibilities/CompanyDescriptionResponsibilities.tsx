import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyDescriptionResponsibilitiesVariant,
  ICompanyDescriptionResponsibilitiesProps
} from "components/molecules/CompanyDescriptionResponsibilities/@types/CompanyDescriptionResponsibilities";
import { mapCompanyDescriptionResponsibilitiesVariantToUnorderedListVariant } from "components/molecules/CompanyDescriptionResponsibilities/config";
import { useCompanyDescriptionResponsibilitiesThemeClasses } from "components/molecules/CompanyDescriptionResponsibilities/hooks/useCompanyDescriptionResponsibilitiesThemeClasses";
import { UnorderedList } from "components/molecules/UnorderedList/UnorderedList";

const CompanyDescriptionResponsibilities: React.FC<
  ICompanyDescriptionResponsibilitiesProps
> = ({
  responsibilities,
  themeClasses,
  variant = CompanyDescriptionResponsibilitiesVariant.Blue
}) => {
  const { companyDescriptionResponsibilitiesTitleThemeClasses } =
    useCompanyDescriptionResponsibilitiesThemeClasses({ variant });

  return (
    <LayoutContainer
      themeClasses={{
        paddingBottom: "pb-68",
        ...themeClasses
      }}
    >
      <Typography
        themeClasses={companyDescriptionResponsibilitiesTitleThemeClasses}
      >
        Responsibilities
      </Typography>
      <LayoutContainer
        themeClasses={{
          marginLeft: "ml-16",
          marginTop: "mt-16"
        }}
      >
        <UnorderedList
          items={responsibilities}
          variant={
            mapCompanyDescriptionResponsibilitiesVariantToUnorderedListVariant[
              variant
            ]
          }
        />
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { CompanyDescriptionResponsibilities };
