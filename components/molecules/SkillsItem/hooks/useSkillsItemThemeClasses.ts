import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { IIconsWithLabelsProps } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  ISkillsItemProps,
  SkillsItemVariant
} from "components/molecules/SkillsItem/@types/SkillsItem";
import {
  mapVariantToSkillsItemContentFrameStyles,
  mapVariantToSkillsItemIconsWrapperStyles
} from "components/molecules/SkillsItem/styles";

const useSkillsItemThemeClasses = ({
  variant = SkillsItemVariant.Full
}: Pick<ISkillsItemProps, "variant">) => {
  const skillsItemThemeClasses: IContentFrameProps["themeClasses"] =
    mapVariantToSkillsItemContentFrameStyles[variant];

  const skillsItemIconsWrapperThemeClasses =
    mapVariantToSkillsItemIconsWrapperStyles[variant];

  const skillsItemIconsWithLabelsThemeClasses: IIconsWithLabelsProps["themeClasses"] =
    {
      iconWithLabel: {
        iconWithLabelContent: {
          wrapper: {
            ...(variant === SkillsItemVariant.Limited && {
              flex: "flex-[0_0_50%]",
              marginBottom: "mb-8",
              paddingRight: "pr-8"
            })
          }
        }
      },
      wrapper: {
        pseudoClasses: []
      }
    };

  return {
    skillsItemIconsWithLabelsThemeClasses,
    skillsItemIconsWrapperThemeClasses,
    skillsItemThemeClasses
  };
};

export { useSkillsItemThemeClasses };
