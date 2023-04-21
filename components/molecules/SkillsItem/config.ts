import {
  ContentFrameTitleVariant,
  ContentFrameVariant,
  IContentFrameProps
} from "components/molecules/ContentFrame/@types/ContentFrame";
import {
  IconsWithLabelsPosition,
  IIconsWithLabelsProps
} from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  IconWithLabelSize,
  IconWithLabelVariant
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { SkillsItemVariant } from "components/molecules/SkillsItem/@types/SkillsItem";

export const mapSkillsItemVariantToContentFrameProps: Record<
  SkillsItemVariant,
  Pick<IContentFrameProps, "variant" | "titleVariant">
> = {
  [SkillsItemVariant.Full]: {
    titleVariant: ContentFrameTitleVariant.LargeLightBlue,
    variant: ContentFrameVariant.Border
  },
  [SkillsItemVariant.Limited]: {
    titleVariant: ContentFrameTitleVariant.MediumWhite,
    variant: ContentFrameVariant.Empty
  }
};

export const mapSkillsItemVariantToIconsWithLabelsProps: Record<
  SkillsItemVariant,
  Pick<IIconsWithLabelsProps, "position" | "size" | "variant">
> = {
  [SkillsItemVariant.Full]: {
    position: IconsWithLabelsPosition.Vertical,
    size: IconWithLabelSize.Medium,
    variant: IconWithLabelVariant.Blue
  },
  [SkillsItemVariant.Limited]: {
    position: IconsWithLabelsPosition.Horizontal,
    size: IconWithLabelSize.ExtraSmall,
    variant: IconWithLabelVariant.White
  }
};
