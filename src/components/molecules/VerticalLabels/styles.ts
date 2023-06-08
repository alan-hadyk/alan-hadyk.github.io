import {
  VerticalLabelsSize,
  VerticalLabelsVariant,
} from "@app/components/molecules/VerticalLabels/@types/VerticalLabels";
import { IThemeClasses } from "@app/types/theme";

export const verticalLabelsDefaultThemeClasses: Record<
  "labelsWrapper",
  IThemeClasses
> = {
  labelsWrapper: {
    alignItems: "items-start",
    display: "flex",
    flexFlow: "flex-col-nowrap",
  },
};

export const mapVerticalLabelsVariantToLabelStyles: Record<
  VerticalLabelsVariant,
  IThemeClasses
> = {
  [VerticalLabelsVariant.Blue]: {
    color: "text-blue100",
  },
  [VerticalLabelsVariant.Dark]: {
    color: "text-blue600",
  },
  [VerticalLabelsVariant.White]: {
    color: "text-white",
  },
};

export const mapSizeToLabelStyles: Record<VerticalLabelsSize, IThemeClasses> = {
  [VerticalLabelsSize.ExtraSmall]: {
    fontSize: "text-12",
    lineHeight: "leading-24",
  },
  [VerticalLabelsSize.Large]: {
    fontSize: "text-24",
    lineHeight: "leading-40",
  },
  [VerticalLabelsSize.Medium]: {
    fontSize: "text-20",
    lineHeight: "leading-32",
  },
  [VerticalLabelsSize.Small]: {
    fontSize: "text-16",
    lineHeight: "leading-28",
  },
};

export const mapSizeToHeight: Record<
  VerticalLabelsSize,
  IThemeClasses["height"]
> = {
  [VerticalLabelsSize.ExtraSmall]: "h-24",
  [VerticalLabelsSize.Large]: "h-40",
  [VerticalLabelsSize.Medium]: "h-32",
  [VerticalLabelsSize.Small]: "h-28",
};

export const mapSizeToLabelsWrapperStyles: Record<
  VerticalLabelsSize,
  IThemeClasses
> = {
  [VerticalLabelsSize.ExtraSmall]: {
    flex: "flex-[1_0_auto]",
    gap: "gap-0",
  },
  [VerticalLabelsSize.Large]: {
    flex: "flex-[0_0_75%]",
    gap: "gap-12",
  },
  [VerticalLabelsSize.Medium]: {
    flex: "flex-[0_0_75%]",
    gap: "gap-12",
  },
  [VerticalLabelsSize.Small]: {
    flex: "flex-[0_0_87.5%]",
    gap: "gap-0",
  },
};
