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
import { ContentFrameWithIconsVariant } from "components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";

export const mapContentFrameWithIconsVariantToContentFrameProps: Record<
  ContentFrameWithIconsVariant,
  Pick<IContentFrameProps, "variant" | "titleVariant">
> = {
  [ContentFrameWithIconsVariant.Full]: {
    titleVariant: ContentFrameTitleVariant.LargeLightBlue,
    variant: ContentFrameVariant.Border
  },
  [ContentFrameWithIconsVariant.Limited]: {
    titleVariant: ContentFrameTitleVariant.MediumWhite,
    variant: ContentFrameVariant.Empty
  }
};

export const mapContentFrameWithIconsVariantToIconsWithLabelsProps: Record<
  ContentFrameWithIconsVariant,
  Pick<IIconsWithLabelsProps, "position" | "size" | "variant">
> = {
  [ContentFrameWithIconsVariant.Full]: {
    position: IconsWithLabelsPosition.Vertical,
    size: IconWithLabelSize.Medium,
    variant: IconWithLabelVariant.Blue
  },
  [ContentFrameWithIconsVariant.Limited]: {
    position: IconsWithLabelsPosition.Horizontal,
    size: IconWithLabelSize.ExtraSmall,
    variant: IconWithLabelVariant.White
  }
};
