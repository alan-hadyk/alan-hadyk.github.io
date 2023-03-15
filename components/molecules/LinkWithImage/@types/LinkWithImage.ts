import { IImageDynamicProps } from "components/atoms/ImageDynamic/@types/ImageDynamic";
import { ILinkProps } from "components/molecules/Link/@types/Link";
import { IThemeClasses } from "types/theme";

export interface ILinkWithImageProps {
  href: ILinkProps["href"];
  iconName: IImageDynamicProps["imageName"];
  isExternal?: ILinkProps["isExternal"];
  themeClasses?: Pick<IThemeClasses, "height" | "width">;
}
