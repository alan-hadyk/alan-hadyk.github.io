import { IImageDynamicProps } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { IThemeClasses } from "@app/types/theme";

export interface ILinkWithIconProps {
  href: string;
  iconName: IImageDynamicProps["imageName"];
  isExternal?: boolean;
  themeClasses?: Pick<IThemeClasses, "height" | "width">;
}
