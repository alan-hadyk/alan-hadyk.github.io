import { TMapSizeToFlexContainerGap } from "@app/components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IconWithLabelSize } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export const mapSizeToFlexContainerGap: TMapSizeToFlexContainerGap = {
  [IconWithLabelSize.ExtraSmall]: "gap-8",
  [IconWithLabelSize.Large]: "gap-28",
  [IconWithLabelSize.Medium]: "gap-12",
  [IconWithLabelSize.Small]: "gap-16",
};

export const iconsWithLabelsDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-start",
  display: "flex",
  flexFlow: "flex-row-wrap",
  height: "h-100%",
  justifyContent: "justify-start",
  maxWidth: "max-w-unset",
};
