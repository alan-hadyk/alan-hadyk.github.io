import spacing from "<styles>/variables/spacing";
import colorPalette from "<styles>/variables/colorPalette";

type ColorPaletteKeys = keyof typeof colorPalette;
type SpacingKeys = keyof typeof spacing;


export interface ButtonContainerProps {
  backgroundColor?: typeof colorPalette[ColorPaletteKeys] | "transparent";
  border?: "1px solid" | "none";
  borderColor?: typeof colorPalette[ColorPaletteKeys];
  height?: "spacing40" | "spacing48" | "spacing56";
  width?: "auto" | "100%";
}

export interface ButtonInnnerContainerPositions {
  x: number;
  y: number;
}

export interface ButtonProps {
  buttonText: string;
  iconName: "codeSandbox" | "download" | "externalLink" | "send";
  size: "small" | "medium" | "large";
  type?: "primary" | "secondary";
}

export interface MapSizeToButtonContainerProps {
  large: {
    height: ButtonContainerProps["height"];
    width: ButtonContainerProps["width"];
  };
  medium: {
    height: ButtonContainerProps["height"];
    width: ButtonContainerProps["width"];
  };
  small: {
    height: ButtonContainerProps["height"];
    width: ButtonContainerProps["width"];
  };
}

export interface MapSizeToIconHeight {
  large: typeof spacing[SpacingKeys];
  medium: typeof spacing[SpacingKeys];
  small: typeof spacing[SpacingKeys];
}

export interface MapTypeToButtonContainerProps {
  primary: {
    backgroundColor: ButtonContainerProps["backgroundColor"];
    border: ButtonContainerProps["border"];
  };
  secondary: {
    backgroundColor: ButtonContainerProps["backgroundColor"];
    border: ButtonContainerProps["border"];
    borderColor: ButtonContainerProps["borderColor"];
  };
}
