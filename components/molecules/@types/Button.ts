import { IThemeClasses, TColorValues } from "types/theme";

export interface IButtonContainerProps {
  backgroundColor?: `bg-${TColorValues}`;
  border?: "border-1 border-solid" | "border-none";
  borderColor?: `border-${TColorValues}`;
  height?: "h-40" | "h-48" | "h-56";
  width?: "w-auto" | "w-full";
}

export interface IButtonInnnerContainerPositions {
  x: number;
  y: number;
}

export interface IButtonProps {
  buttonText: string;
  dataCy?: string;
  iconName?: "btnCodeSandbox" | "btnDownload" | "btnExternalLink";
  iconWidth?: IThemeClasses["width"];
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  tabIndex?: number;
  type?: "primary" | "secondary";
  width?: "w-full" | "w-auto";
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
