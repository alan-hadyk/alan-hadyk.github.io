import { IconWithLabel } from "components/molecules/IconWithLabel";
import { VerticalIconsWithLabels } from "components/molecules/VerticalIconsWithLabels";

import {
  IIconsWithLabelsProps,
  IMapSizeToFlexContainerGap
} from "components/molecules/@types/IconsWithLabels";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { LayoutContainer } from "components/layout/LayoutContainer";

const mapSizeToFlexContainerGap: IMapSizeToFlexContainerGap = {
  horizontal: {
    large: "directChildren:mr-28 directChildren:mb-28",
    medium: "directChildren:mr-12 directChildren:mb-12",
    small: "directChildren:mr-16 directChildren:mb-16"
  },
  vertical: {
    large: "directChildren:mt-28 firstdirectChild:mt-28",
    medium: "directChildren:mt-12 firstdirectChild:mt-12",
    small: "directChildren:mt-16 firstdirectChild:mt-16"
  }
};

const IconsWithLabels: React.FC<IIconsWithLabelsProps> = ({
  iconsWithLabels,
  labelColor = "text-blue100",
  position = "vertical",
  size = "medium"
}) => {
  const justifyContent: ILayoutContainerProps["justifyContent"] =
    position === "horizontal" ? "justify-start" : "justify-center";
  const flexFlow: ILayoutContainerProps["flexFlow"] =
    position === "horizontal" ? "flex-row flex-wrap" : "flex-row flex-nowrap";

  return (
    <LayoutContainer
      alignItems="items-start"
      className={`
        ${
          mapSizeToFlexContainerGap[position][
            size as "small" | "medium" | "large"
          ]
        }

        ${position === "horizontal" ? " max-w-unset" : "max-w-100%"}
      `}
      display="flex"
      flexFlow={flexFlow}
      height="100%"
      justifyContent={justifyContent}
    >
      {position === "horizontal" ? (
        iconsWithLabels &&
        iconsWithLabels.map(
          ({ iconName, isStaticImg, label }): JSX.Element => (
            <IconWithLabel
              labelColor={labelColor}
              iconName={iconName}
              isStaticImg={isStaticImg}
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
