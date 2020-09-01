import { ColorPalette } from "<styles>/variables/__typings__/variables.d.ts";

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
  iconName: "btnCodeSandbox" | "btnDownload" | "btnExternalLink" | "btnSend";
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
