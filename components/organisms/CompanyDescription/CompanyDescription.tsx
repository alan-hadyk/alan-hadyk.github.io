import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "components/molecules/TechStack/TechStack";
import {
  CompanyDescriptionVariant,
  ICompanyDescriptionProps
} from "components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  companyDescriptionContainerDefaultThemeClasses,
  companyDescriptionIconsWithLabelsContainerDefaultThemeClasses
} from "components/organisms/CompanyDescription/styles";
import { CompanyDescriptionTitle } from "components/molecules/CompanyDescriptionTitle/CompanyDescriptionTitle";
import { CompanyDescriptionResponsibilities } from "components/molecules/CompanyDescriptionResponsibilities/CompanyDescriptionResponsibilities";
import { CompanyDescriptionIconWithLabel } from "components/molecules/CompanyDescriptionIconWithLabel/CompanyDescriptionIconWithLabel";
import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import {
  mapCompanyDescriptionVariantToCompanyDescriptionIconWithLabelVariant,
  mapCompanyDescriptionVariantToCompanyDescriptionResponsibilitiesVariant,
  mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant,
  mapCompanyDescriptionVariantToTechStackVariant
} from "components/organisms/CompanyDescription/config";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  iconsWithLabels,
  link,
  responsibilities,
  themeClasses,
  title,
  variant = CompanyDescriptionVariant.Blue
}) => (
  <LayoutContainer
    themeClasses={companyDescriptionContainerDefaultThemeClasses}
  >
    <CompanyDescriptionTitle
      themeClasses={themeClasses?.title}
      variant={
        mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant[variant]
      }
    >
      {title}
    </CompanyDescriptionTitle>

    <LayoutContainer
      themeClasses={
        companyDescriptionIconsWithLabelsContainerDefaultThemeClasses
      }
    >
      <CompanyDescriptionIconWithLabel
        iconName={IconStaticName.Calendar}
        label={date}
        variant={
          mapCompanyDescriptionVariantToCompanyDescriptionIconWithLabelVariant[
            variant
          ]
        }
      />

      {link && (
        <CompanyDescriptionIconWithLabel
          href={link}
          label={link}
          iconName={IconStaticName.Link}
          variant={
            mapCompanyDescriptionVariantToCompanyDescriptionIconWithLabelVariant[
              variant
            ]
          }
        />
      )}
    </LayoutContainer>

    <TechStack
      iconsWithLabels={iconsWithLabels}
      variant={mapCompanyDescriptionVariantToTechStackVariant[variant]}
    />

    <CompanyDescriptionResponsibilities
      responsibilities={responsibilities}
      themeClasses={themeClasses?.responsibilitiesWrapper}
      variant={
        mapCompanyDescriptionVariantToCompanyDescriptionResponsibilitiesVariant[
          variant
        ]
      }
    />
  </LayoutContainer>
);

export { CompanyDescription };
