import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { IIconsWithLabelsProps } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
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

export const mapVariantToSkillsItemIconsWithLabelsStyles: Record<
  SkillsItemVariant,
  IIconsWithLabelsProps["themeClasses"]
> = {
  [SkillsItemVariant.Full]: {},
  [SkillsItemVariant.Limited]: {
    iconWithLabel: {
      content: {
        wrapper: {
          flex: "flex-[0_0_calc(50%-0.8rem)]"
        }
      }
    }
  }
};
