import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import {
  ITechStackProps,
  TechStackSize,
  TechStackVariant
} from "components/molecules/TechStack/@types/TechStack";
import { IconsWithLabelsPosition } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  mapTechStackSizeToCompanyDescriptionSectionSize,
  mapTechStackSizeToIconsWithLabelsSize,
  mapTechStackVariantToCompanyDescriptionSectionVariant,
  mapTechStackVariantToIconsWithLabelsVariant
} from "components/molecules/TechStack/config";
import { CompanyDescriptionSection } from "components/molecules/CompanyDescriptionSection/CompanyDescriptionSection";
import { mapTechStackSizeToStyles } from "components/molecules/TechStack/styles";

const TechStack: React.FC<ITechStackProps> = ({
  iconsWithLabels,
  size = TechStackSize.Large,
  variant = TechStackVariant.Blue
}) => {
  const techStackThemeClasses = mapTechStackSizeToStyles[size];

  return (
    <CompanyDescriptionSection
      size={mapTechStackSizeToCompanyDescriptionSectionSize[size]}
      themeClasses={techStackThemeClasses}
      title="Tech stack"
      variant={mapTechStackVariantToCompanyDescriptionSectionVariant[variant]}
    >
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position={IconsWithLabelsPosition.Horizontal}
        size={mapTechStackSizeToIconsWithLabelsSize[size]}
        variant={mapTechStackVariantToIconsWithLabelsVariant[variant]}
      />
    </CompanyDescriptionSection>
  );
};

export { TechStack };
