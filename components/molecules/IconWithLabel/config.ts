import {
  IconWithLabelSize,
  IconWithLabelVariant
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import {
  IconWithLabelContentSize,
  IconWithLabelContentVariant
} from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";

export const mapIconWithLabelVariantToIconWithLabelContentVariant: Record<
  IconWithLabelVariant,
  IconWithLabelContentVariant
> = {
  [IconWithLabelVariant.Blue]: IconWithLabelContentVariant.Blue,
  [IconWithLabelVariant.White]: IconWithLabelContentVariant.White
};

export const mapIconWithLabelSizeToIconWithLabelContentSize: Record<
  IconWithLabelSize,
  IconWithLabelContentSize
> = {
  [IconWithLabelSize.Large]: IconWithLabelContentSize.Large,
  [IconWithLabelSize.Medium]: IconWithLabelContentSize.Medium,
  [IconWithLabelSize.Small]: IconWithLabelContentSize.Small
};
