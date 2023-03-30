import { IconsWithLabels } from "components/molecules/IconsWithLabels/IconsWithLabels";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";

import {
  ISkillsItemProps,
  SkillsItemVariant
} from "components/molecules/SkillsItem/@types/SkillsItem";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { useSkillsItemThemeClasses } from "components/molecules/SkillsItem/hooks/useSkillsItemThemeClasses";
import {
  mapSkillsItemVariantToContentFrameProps,
  mapSkillsItemVariantToIconsWithLabelsProps
} from "components/molecules/SkillsItem/config";

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
      title={title}
      themeClasses={skillsItemThemeClasses}
      {...mapSkillsItemVariantToContentFrameProps[variant]}
    >
      <LayoutContainer themeClasses={skillsItemIconsWrapperThemeClasses}>
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          themeClasses={skillsItemIconsWithLabelsThemeClasses}
          {...mapSkillsItemVariantToIconsWithLabelsProps[variant]}
        />
      </LayoutContainer>
    </ContentFrame>
  );
};

export { SkillsItem };
