import {
  IconWithLabelSize,
  TMapSizeToIconHeight,
  TMapSizeToTextFontSize
} from "components/molecules/IconWithLabel/@types/IconWithLabel";

export const mapSizeToIconHeight: TMapSizeToIconHeight = {
  [IconWithLabelSize.Large]: "h-40",
  [IconWithLabelSize.Medium]: "h-32",
  [IconWithLabelSize.Small]: "h-28"
};

export const mapSizeToTextFontSize: TMapSizeToTextFontSize = {
  [IconWithLabelSize.Large]: "text-24",
  [IconWithLabelSize.Medium]: "text-20",
  [IconWithLabelSize.Small]: "text-16"
};
