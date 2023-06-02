import {
  IImageDynamicProps,
  ImageDynamicName,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { IThemeClasses } from "@app/types/theme";

export enum ButtonSize {
  Small,
  Medium,
  Large,
}

export interface IButtonProps {
  children: string;
  iconName?: Extract<
    IImageDynamicProps["imageName"],
    ImageDynamicName.Download | ImageDynamicName.ExternalLink
  >;
  iconWidth?: IThemeClasses["width"];
  onClick?: () => void;
  size?: ButtonSize;
  tabIndex?: number;
  themeClasses?: Pick<IThemeClasses, "width">;
  type?: "primary" | "secondary";
}

export type TMapSizeToButtonContainerProps = Record<
  ButtonSize,
  Pick<IThemeClasses, "height">
>;

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
