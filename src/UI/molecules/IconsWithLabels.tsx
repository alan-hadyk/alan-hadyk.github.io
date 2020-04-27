import React from "react";

import IconWithLabel from "<molecules>/IconWithLabel";

import FlexContainer from "<layout>/FlexContainer";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import {
  IconsWithLabelsProps,
  MapSizeToFlexContainerGap
} from "<molecules>/__typings__/IconsWithLabels.d.ts";

function IconsWithLabels({
  color = "blue100",
  iconsWithLabels = [],
  position = "vertical",
  size = "medium"
}: IconsWithLabelsProps): JSX.Element {
  const flexFlow = position === "horizontal" ? "row nowrap" : "column nowrap";

  const mapSizeToFlexContainerGap: MapSizeToFlexContainerGap = {
    large: "spacing28",
    medium: "spacing12",
    small: "spacing16"
  };

  return (
    <FlexContainer
      alignItems="flex-start" 
      dataTestId="IconsWithLabels"
      flexFlow={flexFlow}
      gap={mapSizeToFlexContainerGap[size]}
      height="100%"
      justifyContent="flex-start" 
    >
      {renderIconsWithLabels()}
    </FlexContainer>
  );

  function renderIconsWithLabels(): JSX.Element[] {
    return iconsWithLabels.map(({iconName, label}: IconWithLabelProps): JSX.Element => (
      <IconWithLabel
        color={color}
        iconName={iconName}
        key={label}
        label={label}
        size={size}
      />
    ));
  }
}
  
export default IconsWithLabels;