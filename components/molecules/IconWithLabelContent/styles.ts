import {
  IconWithLabelContentSize,
  IconWithLabelContentVariant,
  TMapSizeToIconHeight,
  TMapSizeToTextFontSize
} from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";
import { IThemeClasses } from "types/theme";

export const iconWithLabelContentDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  group: "group",
  height: "h-100%",
  justifyContent: "justify-start"
};

export const mapSizeToIconHeight: TMapSizeToIconHeight = {
  [IconWithLabelContentSize.Large]: "h-40",
  [IconWithLabelContentSize.Medium]: "h-32",
  [IconWithLabelContentSize.Small]: "h-28"
};

export const mapSizeToTextFontSize: TMapSizeToTextFontSize = {
  [IconWithLabelContentSize.Large]: "text-24",
  [IconWithLabelContentSize.Medium]: "text-20",
  [IconWithLabelContentSize.Small]: "text-16"
};

export const mapIconWithLabelContentVariantToLabelStyles: Record<
  IconWithLabelContentVariant,
  IThemeClasses
> = {
  [IconWithLabelContentVariant.Blue]: {
    color: "text-blue100"
  },
  [IconWithLabelContentVariant.White]: {
    color: "text-white"
  }
};
