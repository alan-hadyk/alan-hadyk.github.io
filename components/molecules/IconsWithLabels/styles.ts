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
    [IconWithLabelSize.Large]: ["directChildren:mr-28", "directChildren:mb-28"],
    [IconWithLabelSize.Medium]: [
      "directChildren:mr-12",
      "directChildren:mb-12"
    ],
    [IconWithLabelSize.Small]: ["directChildren:mr-16", "directChildren:mb-16"]
  },
  [IconsWithLabelsPosition.Vertical]: {
    [IconWithLabelSize.Large]: [
      "directChildren:mt-28",
      "firstdirectChild:mt-28"
    ],
    [IconWithLabelSize.Medium]: [
      "directChildren:mt-12",
      "firstdirectChild:mt-12"
    ],
    [IconWithLabelSize.Small]: [
      "directChildren:mt-16",
      "firstdirectChild:mt-16"
    ]
  }
};

export const iconsWithLabelsDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-start",
  display: "flex",
  height: "100%"
};

export const iconsWithLabelsIconDefaultThemeClasses: IIconWithLabelProps["themeClasses"] =
  {
    iconWithLabelContent: {
      label: {
        color: "text-blue100"
      }
    }
  };
