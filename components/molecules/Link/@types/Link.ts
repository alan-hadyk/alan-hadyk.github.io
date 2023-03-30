import { IThemeClasses } from "types/theme";
import { TChildren } from "types/props";

export interface ILinkProps {
  children: TChildren;
  href: string;
  isExternal?: boolean;
  isHoverable?: boolean;
  themeClasses?: Pick<
    IThemeClasses,
    "alignItems" | "display" | "height" | "justifyContent" | "width"
  >;
}
