import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";

import { ISkillsItemProps } from "components/molecules/SkillsItem/@types/SkillsItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconsWithLabelsPosition } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  skillsItemDefaultThemeClasses,
  skillsItemIconsWrapperDefaultThemeClasses
} from "components/molecules/SkillsItem/styles";

const SkillsItem: React.FC<ISkillsItemProps> = ({ iconsWithLabels, title }) => (
  <ContentFrame
    shouldDisplayBorder
    title={title}
    themeClasses={skillsItemDefaultThemeClasses}
  >
    <LayoutContainer themeClasses={skillsItemIconsWrapperDefaultThemeClasses}>
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position={IconsWithLabelsPosition.Vertical}
        size={IconWithLabelSize.Medium}
      />
    </LayoutContainer>
  </ContentFrame>
);

export { SkillsItem };
