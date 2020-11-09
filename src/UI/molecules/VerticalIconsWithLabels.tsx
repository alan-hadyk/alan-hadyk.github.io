import React from "react";
import PropTypes from "prop-types";

import Icon, { iconComponents } from "UI/atoms/Icon";
import Text from "UI/atoms/Text";
import {
  mapSizeToIconHeight,
  mapSizeToTextFontSize
} from "UI/molecules/IconWithLabel";
import FlexItem from "UI/layout/FlexItem";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import spacing from "styles/variables/spacing";
import colorPalette from "styles/variables/colorPalette";

import { VerticalIconsWithLabelsProps } from "UI/molecules/__typings__/VerticalIconsWithLabels";
import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

const VerticalIconsWithLabels = ({
  iconsWithLabels,
  labelColor = "blue100",
  size = "medium"
}: VerticalIconsWithLabelsProps): JSX.Element => (
  <FlexContainer
    alignItems="center"
    dataTestId="VerticalIconsWithLabels"
    flexFlow="row nowrap"
    height="100%"
    justifyContent="center"
  >
    <FlexItem flex={`0 0 ${spacing.spacing72}`}>
      {iconsWithLabels.map(
        ({ iconName }: IconWithLabelProps, index: number): JSX.Element => (
          <SpacingContainer
            dataCy="VerticalIcon"
            dataTestId="IconSpacingContainer"
            key={iconName + index}
            marginBottom="spacing12"
          >
            <Icon
              height={mapSizeToIconHeight[size]}
              iconName={iconName}
              isResponsive
            />
          </SpacingContainer>
        )
      )}
    </FlexItem>
    <FlexItem flex="0 1 auto">
      {iconsWithLabels.map(
        ({ label }: IconWithLabelProps): JSX.Element => (
          <SpacingContainer
            dataCy="VerticalLabel"
            dataTestId="LabelSpacingContainer"
            height="spacing32"
            key={label}
            marginBottom="spacing12"
          >
            <Text
              dataTestId="LabelText"
              color={labelColor}
              ellipsis
              fontSize={mapSizeToTextFontSize[size]}
              key={label}
              lineHeight="spacing32"
            >
              {label}
            </Text>
          </SpacingContainer>
        )
      )}
    </FlexItem>
  </FlexContainer>
);

VerticalIconsWithLabels.propTypes = {
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf([...Object.keys(iconComponents)]).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired,
  labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default VerticalIconsWithLabels;
