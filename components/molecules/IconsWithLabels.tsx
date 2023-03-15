import { IconWithLabel } from "components/molecules/IconWithLabel";
import { VerticalIconsWithLabels } from "components/molecules/VerticalIconsWithLabels";

import {
  IIconsWithLabelsProps,
  IMapSizeToFlexContainerGap
} from "components/molecules/@types/IconsWithLabels";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IThemeClasses } from "types/theme";

const mapSizeToFlexContainerGap: IMapSizeToFlexContainerGap = {
  horizontal: {
    large: ["directChildren:mr-28", "directChildren:mb-28"],
    medium: ["directChildren:mr-12", "directChildren:mb-12"],
    small: ["directChildren:mr-16", "directChildren:mb-16"]
  },
  vertical: {
    large: ["directChildren:mt-28", "firstdirectChild:mt-28"],
    medium: ["directChildren:mt-12", "firstdirectChild:mt-12"],
    small: ["directChildren:mt-16", "firstdirectChild:mt-16"]
  }
};

const IconsWithLabels: React.FC<IIconsWithLabelsProps> = ({
  iconsWithLabels,
  labelColor = "text-blue100",
  position = "vertical",
  size = "medium"
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
        pseudoClasses:
          mapSizeToFlexContainerGap[position][
            size as "small" | "medium" | "large"
          ]
      }}
    >
      {position === "horizontal" ? (
        iconsWithLabels &&
        iconsWithLabels.map(
          ({ iconName, label }): JSX.Element => (
            <IconWithLabel
              labelColor={labelColor}
              iconName={iconName}
              key={label}
              label={label}
              size={size}
            />
          )
        )
      ) : (
        <VerticalIconsWithLabels
          labelColor={labelColor}
          iconsWithLabels={iconsWithLabels}
          size={size as "small" | "medium" | "large"}
        />
      )}
    </LayoutContainer>
  );
};

export { IconsWithLabels };
