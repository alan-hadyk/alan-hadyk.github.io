import { TColor } from "types/props";

export interface IButtonContainerProps {
  backgroundColor?: `bg-${TColor}`;
  border?: "border-1 border-solid" | "border-none";
  borderColor?: `border-${TColor}`;
  height?: "h-40" | "h-48" | "h-56";
  width?: "w-auto" | "w-100%";
}

export interface IButtonInnnerContainerPositions {
  x: number;
  y: number;
}

export interface IButtonProps {
  buttonText: string;
  dataCy?: string;
  dataTestId?: string;
  iconName?: "btnCodeSandbox" | "btnDownload" | "btnExternalLink";
  iconWidth?: string;
  onClick?: () => unknown;
  size?: "small" | "medium" | "large";
  tabIndex?: number;
  type?: "primary" | "secondary";
  width?: "w-100%" | "w-auto";
}

export interface IMapSizeToButtonContainerProps {
  large: {
    height: IButtonContainerProps["height"];
  };
  medium: {
    height: IButtonContainerProps["height"];
  };
  small: {
    height: IButtonContainerProps["height"];
  };
}

export interface IMapTypeToButtonContainerProps {
  primary: {
    backgroundColor: IButtonContainerProps["backgroundColor"];
    border: IButtonContainerProps["border"];
  };
  secondary: {
    backgroundColor: IButtonContainerProps["backgroundColor"];
    border: IButtonContainerProps["border"];
    borderColor: IButtonContainerProps["borderColor"];
  };
}
