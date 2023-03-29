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
    },
    title: {
      fontSize: "text-28"
    }
  },
  [SkillsItemVariant.Limited]: {
    container: {
      flex: "flex-[0_0_100%]"
    },
    title: {
      color: "text-white",
      fontSize: "text-20",
      marginBottom: "mb-12",
      textTransform: "normal-case"
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
