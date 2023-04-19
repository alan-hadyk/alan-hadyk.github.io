import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "components/molecules/TechStack/TechStack";
import {
  CompanyDescriptionSize,
  CompanyDescriptionVariant,
  ICompanyDescriptionProps
} from "components/organisms/CompanyDescription/@types/CompanyDescription";
import { companyDescriptionContainerDefaultThemeClasses } from "components/organisms/CompanyDescription/styles";
import { CompanyDescriptionTitle } from "components/molecules/CompanyDescriptionTitle/CompanyDescriptionTitle";
import { CompanyResponsibilities } from "components/molecules/CompanyResponsibilities/CompanyResponsibilities";
import { CompanyDescriptionIconWithLabel } from "components/molecules/CompanyDescriptionIconWithLabel/CompanyDescriptionIconWithLabel";
import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import {
  mapCompanyDescriptionSizeToCompanyDescriptionTitleSize,
  mapCompanyDescriptionSizeToIconWithLabelSize,
  mapCompanyDescriptionSizeToTechStackSize,
  mapCompanyDescriptionVariantToCompanyDescriptionIconWithLabelVariant,
  mapCompanyDescriptionVariantToCompanyResponsibilitiesVariant,
  mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant,
  mapCompanyDescriptionVariantToTechStackVariant,
  mapCompanyDescriptionSizeToCompanyResponsibilitiesSize
} from "components/organisms/CompanyDescription/config";
import { useCompanyDescriptionThemeClasses } from "components/organisms/CompanyDescription/hooks/useCompanyDescriptionThemeClasses";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  iconsWithLabels,
  link,
  responsibilities,
  size = CompanyDescriptionSize.Large,
  themeClasses,
  title,
  variant = CompanyDescriptionVariant.Blue
}) => {
  const { companyDescriptionIconsWithLabelsContainerThemeClasses } =
    useCompanyDescriptionThemeClasses({ size });

  const iconWithLabelCommonProps = {
    size: mapCompanyDescriptionSizeToIconWithLabelSize[size],
    variant:
      mapCompanyDescriptionVariantToCompanyDescriptionIconWithLabelVariant[
        variant
      ]
  };

  return (
    <LayoutContainer
      themeClasses={companyDescriptionContainerDefaultThemeClasses}
    >
      <CompanyDescriptionTitle
        size={mapCompanyDescriptionSizeToCompanyDescriptionTitleSize[size]}
        themeClasses={themeClasses?.title}
        variant={
          mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant[variant]
        }
      >
        {title}
      </CompanyDescriptionTitle>

      <LayoutContainer
        themeClasses={companyDescriptionIconsWithLabelsContainerThemeClasses}
      >
        <CompanyDescriptionIconWithLabel
          iconName={IconStaticName.Calendar}
          label={date}
          {...iconWithLabelCommonProps}
        />

        {link && (
          <CompanyDescriptionIconWithLabel
            href={link}
            iconName={IconStaticName.Link}
            label={link}
            {...iconWithLabelCommonProps}
          />
        )}
      </LayoutContainer>

      <TechStack
        iconsWithLabels={iconsWithLabels}
        size={mapCompanyDescriptionSizeToTechStackSize[size]}
        variant={mapCompanyDescriptionVariantToTechStackVariant[variant]}
      />

      <CompanyResponsibilities
        responsibilities={responsibilities}
        size={mapCompanyDescriptionSizeToCompanyResponsibilitiesSize[size]}
        themeClasses={themeClasses?.responsibilitiesWrapper}
        variant={
          mapCompanyDescriptionVariantToCompanyResponsibilitiesVariant[variant]
        }
      />
    </LayoutContainer>
  );
};

export { CompanyDescription };
