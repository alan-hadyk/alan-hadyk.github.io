import PropTypes from "prop-types";

import { Icon, iconNames } from "components/atoms/Icon";
import { Text } from "components/atoms/Text";

import {
  IIconWithLabelProps,
  IMapSizeToIconHeight,
  IMapSizeToTextFontSize
} from "components/molecules/@types/IconWithLabel";

import { colorPropType } from "helpers/propTypes/color";

import { isIE11 } from "helpers/browser/isIE11";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { ITextProps } from "components/atoms/@types/Text";

const mapSizeToIconHeight: IMapSizeToIconHeight = {
  large: "h-40",
  medium: "h-32",
  small: "h-28"
};

const mapSizeToTextFontSize: IMapSizeToTextFontSize = {
  large: "text-24",
  medium: "text-20",
  small: "text-16"
};

const IconWithLabel: React.FC<IIconWithLabelProps> = ({
  iconName,
  label,
  labelColor = "text-blue100",
  size = "medium"
}): JSX.Element => {
  const iconPadding = size === "small" ? "pr-8" : "pr-12";

  return (
    <LayoutContainer
      alignItems="items-center"
      dataCy="IconWithLabel"
      display="flex"
      flexFlow="flex-row flex-nowrap"
      height="100%"
      justifyContent="justify-start"
    >
      <LayoutContainer paddingRight={iconPadding}>
        <Icon
          height={mapSizeToIconHeight[size as "small" | "medium" | "large"]}
          iconName={iconName}
          isHeightResponsive
          width={isIE11() ? "w-32" : "w-auto"}
        />
      </LayoutContainer>
      <Text
        dataTestId="LabelText"
        color={labelColor as ITextProps["color"]}
        fontSize={mapSizeToTextFontSize[size as "small" | "medium" | "large"]}
      >
        {label}
      </Text>
    </LayoutContainer>
  );
};

IconWithLabel.propTypes = {
  iconName: PropTypes.oneOf(iconNames).isRequired,
  label: PropTypes.string.isRequired,
  labelColor: colorPropType("text"),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export { IconWithLabel, mapSizeToIconHeight, mapSizeToTextFontSize };
