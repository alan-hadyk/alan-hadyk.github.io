import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";
import { VerticalIconsWithLabels } from "components/molecules/VerticalIconsWithLabels";

import {
  IIconsWithLabelsProps,
  IMapSizeToFlexContainerGap
} from "components/molecules/@types/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IThemeClasses } from "types/theme";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const mapSizeToFlexContainerGap: IMapSizeToFlexContainerGap = {
  horizontal: {
    [IconWithLabelSize.Large]: ["directChildren:mr-28", "directChildren:mb-28"],
    [IconWithLabelSize.Medium]: [
      "directChildren:mr-12",
      "directChildren:mb-12"
    ],
    [IconWithLabelSize.Small]: ["directChildren:mr-16", "directChildren:mb-16"]
  },
  vertical: {
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

const IconsWithLabels: React.FC<IIconsWithLabelsProps> = ({
  iconsWithLabels,
  labelColor = "text-blue100",
  position = "vertical",
  size = IconWithLabelSize.Medium
}) => {
  const justifyContent: IThemeClasses["justifyContent"] =
    position === "horizontal" ? "justify-start" : "justify-center";
  const flexFlow: IThemeClasses["flexFlow"] =
    position === "horizontal" ? "flex-row-wrap" : "flex-row-nowrap";

  return (
    <LayoutContainer
      themeClasses={{
        alignItems: "items-start",
        display: "flex",
        flexFlow,
        height: "100%",
        justifyContent,
        maxWidth: position === "horizontal" ? "max-w-unset" : "max-w-100%",
        pseudoClasses: mapSizeToFlexContainerGap[position][size]
      }}
    >
      {position === "horizontal" ? (
        iconsWithLabels &&
        iconsWithLabels.map(
          ({ iconName, label }): JSX.Element => (
            <IconWithLabel
              iconName={iconName}
              key={label}
              label={label}
              size={size}
              themeClasses={{
                iconWithLabelContent: {
                  label: {
                    color: labelColor
                  }
                }
              }}
            />
          )
        )
      ) : (
        <VerticalIconsWithLabels
          labelColor={labelColor}
          iconsWithLabels={iconsWithLabels}
          size={size}
        />
      )}
    </LayoutContainer>
  );
};

export { IconsWithLabels };
