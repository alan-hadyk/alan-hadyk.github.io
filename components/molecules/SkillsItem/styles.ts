import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { SkillsItemVariant } from "components/molecules/SkillsItem/@types/SkillsItem";
import { IThemeClasses } from "types/theme";

export const mapVariantToSkillsItemContentFrameStyles: Record<
  SkillsItemVariant,
  IContentFrameProps["themeClasses"]
> = {
  [SkillsItemVariant.Full]: {
    container: {
      flex: "flex-[1_1_100%]"
    }
  },
  [SkillsItemVariant.Limited]: {
    container: {
      flex: "flex-[0_0_100%]"
    }
  }
};

export const mapVariantToSkillsItemIconsWrapperStyles: Record<
  SkillsItemVariant,
  IThemeClasses
> = {
  [SkillsItemVariant.Full]: {
    padding: "p-32"
  },
  [SkillsItemVariant.Limited]: {
    padding: "p-0"
  }
};
