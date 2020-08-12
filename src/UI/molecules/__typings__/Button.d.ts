import {
  ColorPalette,
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface ButtonContainerProps {
  backgroundColor?: ColorPalette | "transparent";
  border?: "1px solid" | "none";
  borderColor?: ColorPalette;
  height?: "spacing40" | "spacing48" | "spacing56";
  width?: "auto" | "100%";
}

export interface ButtonInnnerContainerPositions {
  x: number;
  y: number;
}

export interface ButtonProps {
  buttonText: string;
  dataTestId?: string;
  iconName: "btnCodeSandbox" | "btnDownload" | "btnExternalLink" | "btnSend";
  size: "small" | "medium" | "large";
  type?: "primary" | "secondary";
  width?: "100%" | "auto";
}

export interface MapSizeToButtonContainerProps {
  large: {
    height: ButtonContainerProps["height"];
  };
  medium: {
    height: ButtonContainerProps["height"];
  };
  small: {
    height: ButtonContainerProps["height"];
  };
}

export interface MapSizeToIconHeight {
  large: Spacing;
  medium: Spacing;
  small: Spacing;
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
