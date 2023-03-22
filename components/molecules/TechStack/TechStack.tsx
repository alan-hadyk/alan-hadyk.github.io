import { Typography } from "components/atoms/Typography/Typography";
import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { ITechStackProps } from "components/molecules/TechStack/@types/TechStack";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconsWithLabelsPosition } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  techStackDefaultThemeClasses,
  techStackIconsWrapperDefaultThemeClasses,
  techStackTitleDefaultThemeClasses
} from "components/molecules/TechStack/styles";

const TechStack: React.FC<ITechStackProps> = ({ iconsWithLabels }) => (
  <LayoutContainer themeClasses={techStackDefaultThemeClasses}>
    <Typography themeClasses={techStackTitleDefaultThemeClasses}>
      Tech stack
    </Typography>
    <LayoutContainer themeClasses={techStackIconsWrapperDefaultThemeClasses}>
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position={IconsWithLabelsPosition.Horizontal}
        size={IconWithLabelSize.Small}
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { TechStack };
