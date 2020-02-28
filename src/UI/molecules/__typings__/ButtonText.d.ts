import {
  FontSizes
} from "<styles>/variables/__typings__/variables";

export interface ButtonTextProps {
  buttonText: string;
  size: "small" | "medium" | "large";
}

export interface TextProps {
  fontSize: FontSizes;
}

export interface MapSizeToButtonTextProps {
  large: TextProps;
  medium: TextProps;
  small: TextProps;
}