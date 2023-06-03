import { VerticalIconsSize } from "@app/components/molecules/VerticalIcons/@types/VerticalIcons";
import {
  VerticalIconsWithLabelsSize,
  VerticalIconsWithLabelsVariant,
} from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";
import {
  VerticalLabelsSize,
  VerticalLabelsVariant,
} from "@app/components/molecules/VerticalLabels/@types/VerticalLabels";

export const mapVerticalIconsWithLabelsSizeToVerticalIconsSize: Record<
  VerticalIconsWithLabelsSize,
  VerticalIconsSize
> = {
  [VerticalIconsWithLabelsSize.ExtraSmall]: VerticalIconsSize.ExtraSmall,
  [VerticalIconsWithLabelsSize.Small]: VerticalIconsSize.Small,
  [VerticalIconsWithLabelsSize.Medium]: VerticalIconsSize.Medium,
  [VerticalIconsWithLabelsSize.Large]: VerticalIconsSize.Large,
};

export const mapVerticalIconsWithLabelsSizeToVerticalLabelsSize: Record<
  VerticalIconsWithLabelsSize,
  VerticalLabelsSize
> = {
  [VerticalIconsWithLabelsSize.ExtraSmall]: VerticalLabelsSize.ExtraSmall,
  [VerticalIconsWithLabelsSize.Small]: VerticalLabelsSize.Small,
  [VerticalIconsWithLabelsSize.Medium]: VerticalLabelsSize.Medium,
  [VerticalIconsWithLabelsSize.Large]: VerticalLabelsSize.Large,
};

export const mapVerticalIconsWithLabelsVariantToVerticalLabelsVariant: Record<
  VerticalIconsWithLabelsVariant,
  VerticalLabelsVariant
> = {
  [VerticalIconsWithLabelsVariant.Blue]: VerticalLabelsVariant.Blue,
  [VerticalIconsWithLabelsVariant.Dark]: VerticalLabelsVariant.Dark,
  [VerticalIconsWithLabelsVariant.White]: VerticalLabelsVariant.White,
};
