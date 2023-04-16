import { Typography } from "components/atoms/Typography/Typography";
import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  ITechStackProps,
  TechStackVariant
} from "components/molecules/TechStack/@types/TechStack";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconsWithLabelsPosition } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  techStackDefaultThemeClasses,
  techStackIconsWrapperDefaultThemeClasses
} from "components/molecules/TechStack/styles";
import { useTechStackThemeClasses } from "components/molecules/TechStack/hooks/useTechStackThemeClasses";
import { mapTechStackVariantToIconsWithLabelsVariant } from "components/molecules/TechStack/config";

const TechStack: React.FC<ITechStackProps> = ({
  iconsWithLabels,
  variant = TechStackVariant.Blue
}) => {
  const { techStackTitleThemeClasses } = useTechStackThemeClasses({ variant });

  return (
    <LayoutContainer themeClasses={techStackDefaultThemeClasses}>
      <Typography themeClasses={techStackTitleThemeClasses}>
        Tech stack
      </Typography>
      <LayoutContainer themeClasses={techStackIconsWrapperDefaultThemeClasses}>
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position={IconsWithLabelsPosition.Horizontal}
          size={IconWithLabelSize.Small}
          variant={mapTechStackVariantToIconsWithLabelsVariant[variant]}
        />
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { TechStack };
