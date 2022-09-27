import PropTypes from "prop-types";

import { Text } from "components/atoms/Text";

import {
  IButtonTextProps,
  IMapSizeToButtonTextProps
} from "components/molecules/@types/ButtonText";
import { TSpacingValues } from "types/theme";
import { LayoutContainer } from "components/layout/LayoutContainer";

const mapSizeToButtonTextProps: IMapSizeToButtonTextProps = {
  large: { fontSize: "text-28" },
  medium: { fontSize: "text-24" },
  small: { fontSize: "text-20" }
};

const ButtonText: React.FC<IButtonTextProps> = ({
  buttonText,
  fontFamily = "font-exan",
  hasMargin = true,
  size,
  textTransform = "lowercase"
}) => {
  const getMarginRight = (): `mr-${TSpacingValues}` => {
    if (!hasMargin) {
      return "mr-0";
    }

    return size === "small" ? "mr-8" : "mr-16";
  };

  return (
    <LayoutContainer marginRight={getMarginRight()}>
      <Text
        fontFamily={fontFamily}
        fontSize={mapSizeToButtonTextProps[size].fontSize}
        color="text-white"
        textTransform={textTransform}
      >
        {buttonText}
      </Text>
    </LayoutContainer>
  );
};

ButtonText.propTypes = {
  buttonText: PropTypes.string.isRequired,
  fontFamily: PropTypes.oneOf(["font-exan", "font-anonymousPro"]),
  hasMargin: PropTypes.bool,
  size: PropTypes.oneOf<IButtonTextProps["size"]>(["small", "medium", "large"])
    .isRequired,
  textTransform: PropTypes.oneOf<IButtonTextProps["textTransform"]>([
    "normal-case",
    "lowercase",
    "uppercase",
    "capitalize"
  ])
};

export { ButtonText };
