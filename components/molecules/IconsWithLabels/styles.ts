import {
  IconsWithLabelsPosition,
  TMapSizeToFlexContainerGap
} from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export const mapSizeToFlexContainerGap: TMapSizeToFlexContainerGap = {
  [IconsWithLabelsPosition.Horizontal]: {
    [IconWithLabelSize.Large]: "gap-28",
    [IconWithLabelSize.Medium]: "gap-12",
    [IconWithLabelSize.Small]: "gap-16"
  },
  [IconsWithLabelsPosition.Vertical]: {
    [IconWithLabelSize.Large]: "gap-28",
    [IconWithLabelSize.Medium]: "gap-12",
    [IconWithLabelSize.Small]: "gap-16"
  }
};

export const iconsWithLabelsDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-start",
  display: "flex",
  height: "h-100%"
};

export const iconsWithLabelsIconDefaultThemeClasses: IIconWithLabelProps["themeClasses"] =
  {
    iconWithLabelContent: {
      label: {
        color: "text-blue100"
      }
    }
  };
