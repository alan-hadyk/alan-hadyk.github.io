import fontSizes from "<styles>/variables/fontSizes";

type FontSizesKeys = keyof typeof fontSizes;

export interface ButtonTextProps {
  buttonText: string;
  size: "small" | "medium" | "large";
}

export interface TextProps {
  fontSize: typeof fontSizes[FontSizesKeys];
}

export interface MapSizeToButtonTextProps {
  large: TextProps;
  medium: TextProps;
  small: TextProps;
}