import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";

import {
  ISkillsItemProps,
  SkillsItemVariant
} from "components/molecules/SkillsItem/@types/SkillsItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconsWithLabelsPosition } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { useSkillsItemThemeClasses } from "components/molecules/SkillsItem/hooks/useSkillsItemThemeClasses";

const SkillsItem: React.FC<ISkillsItemProps> = ({
  iconsWithLabels,
  title,
  variant = SkillsItemVariant.Full
}) => {
  const {
    skillsItemIconsWithLabelsThemeClasses,
    skillsItemIconsWrapperThemeClasses,
    skillsItemThemeClasses
  } = useSkillsItemThemeClasses({
    variant
  });

  return (
    <ContentFrame
      shouldDisplayBorder={variant === SkillsItemVariant.Full}
      title={title}
      themeClasses={skillsItemThemeClasses}
    >
      <LayoutContainer themeClasses={skillsItemIconsWrapperThemeClasses}>
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position={
            variant === SkillsItemVariant.Full
              ? IconsWithLabelsPosition.Vertical
              : IconsWithLabelsPosition.Horizontal
          }
          size={
            variant === SkillsItemVariant.Full
              ? IconWithLabelSize.Medium
              : IconWithLabelSize.ExtraSmall
          }
          themeClasses={skillsItemIconsWithLabelsThemeClasses}
        />
      </LayoutContainer>
    </ContentFrame>
  );
};

export { SkillsItem };
