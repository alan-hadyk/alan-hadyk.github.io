import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { IIconsWithLabelsProps } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { ContentFrameWithIconsVariant } from "components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import { IThemeClasses } from "types/theme";

export const mapContentFrameWithIconsVariantToContentFrameStyles: Record<
  ContentFrameWithIconsVariant,
  IContentFrameProps["themeClasses"]
> = {
  [ContentFrameWithIconsVariant.Full]: {
    container: {
      flex: "flex-[1_1_100%]"
    }
  },
  [ContentFrameWithIconsVariant.Limited]: {
    container: {
      flex: "flex-[0_0_100%]"
    }
  }
};

export const mapContentFrameWithIconsVariantIconsWrapperStyles: Record<
  ContentFrameWithIconsVariant,
  IThemeClasses
> = {
  [ContentFrameWithIconsVariant.Full]: {
    padding: "p-32"
  },
  [ContentFrameWithIconsVariant.Limited]: {
    padding: "p-0"
  }
};

export const mapContentFrameWithIconsVariantToIconsWithLabelsStyles: Record<
  ContentFrameWithIconsVariant,
  IIconsWithLabelsProps["themeClasses"]
> = {
  [ContentFrameWithIconsVariant.Full]: {},
  [ContentFrameWithIconsVariant.Limited]: {
    iconWithLabel: {
      content: {
        wrapper: {
          flex: "flex-[0_0_calc(50%-0.8rem)]"
        }
      }
    }
  }
};
