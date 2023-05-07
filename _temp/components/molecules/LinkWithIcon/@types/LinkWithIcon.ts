import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { IThemeClasses } from "types/theme";

export interface ILinkWithIconProps {
  href: string;
  iconName: IIconDynamicProps["iconName"];
  isExternal?: boolean;
  themeClasses?: Pick<IThemeClasses, "height" | "width">;
}
