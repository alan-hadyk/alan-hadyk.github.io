import {
  ContentFrameTitleVariant,
  ContentFrameVariant,
  IContentFrameProps,
} from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrameWithIconsVariant } from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";

export const mapContentFrameWithIconsVariantToContentFrameProps: Record<
  ContentFrameWithIconsVariant,
  Pick<IContentFrameProps, "variant" | "titleVariant">
> = {
  [ContentFrameWithIconsVariant.Full]: {
    titleVariant: ContentFrameTitleVariant.LargeLightBlue,
    variant: ContentFrameVariant.Border,
  },
  [ContentFrameWithIconsVariant.Limited]: {
    titleVariant: ContentFrameTitleVariant.MediumWhite,
    variant: ContentFrameVariant.Empty,
  },
};
