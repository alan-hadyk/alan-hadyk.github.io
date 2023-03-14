import { Typography } from "components/atoms/Typography/Typography";

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
      <Typography
        themeClasses={{
          color: "text-white",
          fontFamily,
          fontSize: mapSizeToButtonTextProps[size].fontSize,
          textTransform
        }}
      >
        {buttonText}
      </Typography>
    </LayoutContainer>
  );
};

export { ButtonText };
