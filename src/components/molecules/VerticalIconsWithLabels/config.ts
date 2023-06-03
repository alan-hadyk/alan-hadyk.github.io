import { VerticalIconSize } from "@app/components/molecules/VerticalIcons/@types/VerticalIcons";
import { VerticalIconsWithLabelsSize } from "@app/components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";

export const mapVerticalIconsWithLabelsSizeToVerticalIconSize: Record<
  VerticalIconsWithLabelsSize,
  VerticalIconSize
> = {
  [VerticalIconsWithLabelsSize.ExtraSmall]: VerticalIconSize.ExtraSmall,
  [VerticalIconsWithLabelsSize.Small]: VerticalIconSize.Small,
  [VerticalIconsWithLabelsSize.Medium]: VerticalIconSize.Medium,
  [VerticalIconsWithLabelsSize.Large]: VerticalIconSize.Large,
};
