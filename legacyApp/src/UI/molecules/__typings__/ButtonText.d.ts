import {
  FontFamilies,
  FontSizes
} from "styles/variables/__typings__/variables";

export interface ButtonTextProps {
  buttonText: string;
  dataTestId?: string;
  fontFamily?: FontFamilies;
  hasMargin?: boolean;
  size: "small" | "medium" | "large";
  textTransform?: "none" | "lowercase" | "uppercase" | "capitalize";
}

export interface TextProps {
  fontSize: FontSizes;
}

export interface MapSizeToButtonTextProps {
  large: TextProps;
  medium: TextProps;
  small: TextProps;
}
