import React from "react";
import PropTypes from "prop-types";

import { iconComponents } from "UI/atoms/Icon";
import IconWithLabel from "UI/molecules/IconWithLabel";
import VerticalIconsWithLabels from "UI/molecules/VerticalIconsWithLabels";
import FlexContainer from "UI/layout/FlexContainer";

import colorPalette from "styles/variables/colorPalette";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";
import {
  IconsWithLabelsProps,
  MapSizeToFlexContainerGap
} from "UI/molecules/__typings__/IconsWithLabels";
import { FlexContainerProps } from "UI/layout/__typings__/FlexContainer";

const mapSizeToFlexContainerGap: MapSizeToFlexContainerGap = {
  large: "spacing28",
  medium: "spacing12",
  small: "spacing16"
};

function IconsWithLabels({
  iconsWithLabels,
  labelColor = "blue100",
  position = "vertical",
  size = "medium"
}: IconsWithLabelsProps): JSX.Element {
  const justifyContent: FlexContainerProps["justifyContent"] =
    position === "horizontal" ? "flex-start" : "center";
  const flexFlow: FlexContainerProps["flexFlow"] =
    position === "horizontal" ? "row wrap" : "row nowrap";

  return (
    <FlexContainer
      alignItems="flex-start"
      dataTestId="IconsWithLabels"
      flexFlow={flexFlow}
      gap={mapSizeToFlexContainerGap[size]}
      height="100%"
      justifyContent={justifyContent}
    >
      {position === "horizontal" ? (
        iconsWithLabels &&
        iconsWithLabels.map(
          ({ iconName, label }: IconWithLabelProps): JSX.Element => (
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
          size={size}
        />
      )}
    </FlexContainer>
  );
}

IconsWithLabels.propTypes = {
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf([...Object.keys(iconComponents)]).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired,
  labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
  position: PropTypes.oneOf(["vertical", "horizontal"]),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default IconsWithLabels;
