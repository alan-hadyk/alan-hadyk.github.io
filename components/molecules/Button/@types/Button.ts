import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { IThemeClasses } from "types/theme";

export interface IButtonProps {
  children: string;
  iconName?: Extract<
    IIconDynamicProps["iconName"],
    "download" | "externalLink"
  >;
  iconWidth?: IThemeClasses["width"];
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  tabIndex?: number;
  themeClasses?: Pick<IThemeClasses, "width">;
  type?: "primary" | "secondary";
}

export interface IMapSizeToButtonContainerProps {
  large: {
    height: IThemeClasses["height"];
  };
  medium: {
    height: IThemeClasses["height"];
  };
  small: {
    height: IThemeClasses["height"];
  };
}

export interface IMapTypeToButtonContainerProps {
  primary: {
    backgroundColor: IThemeClasses["backgroundColor"];
    borderStyle: IThemeClasses["borderStyle"];
  };
  secondary: {
    backgroundColor: IThemeClasses["backgroundColor"];
    borderColor: IThemeClasses["borderColor"];
    borderStyle: IThemeClasses["borderStyle"];
    borderWidth: IThemeClasses["borderWidth"];
  };
}
