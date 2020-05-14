import React, { useCallback } from "react";

import IconWithLabel from "<molecules>/IconWithLabel";

import FlexContainer from "<layout>/FlexContainer";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import {
  IconsWithLabelsProps,
  MapSizeToFlexContainerGap
} from "<molecules>/__typings__/IconsWithLabels.d.ts";

import {
  FlexContainerProps
} from "<layout>/__typings__/FlexContainer.d.ts";

const mapSizeToFlexContainerGap: MapSizeToFlexContainerGap = {
  large: "spacing28",
  medium: "spacing12",
  small: "spacing16"
}; 

function IconsWithLabels({
  iconsWithLabels = [],
  labelColor = "blue100",
  position = "vertical",
  size = "medium"
}: IconsWithLabelsProps): JSX.Element {
  const flexFlow: FlexContainerProps["flexFlow"] = position === "horizontal" ? "row nowrap" : "column nowrap";

  const renderIconsWithLabels = useCallback((): JSX.Element[] =>
    iconsWithLabels.map(({ iconName, label }: IconWithLabelProps): JSX.Element => (
      <IconWithLabel
        labelColor={labelColor}
        iconName={iconName}
        key={label}
        label={label}
        size={size}
      />
    )), [iconsWithLabels, labelColor, size]);

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
}
  
export default IconsWithLabels;