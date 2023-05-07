import { ITypographyProps } from "components/atoms/Typography/@types/Typography";
import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface IHexagonWithDescriptionContentProps {
  children: TChildren;
  description: ITypographyProps["children"];
  themeClasses?: {
    description?: Pick<IThemeClasses, "lineHeight" | "width">;
    hexagonContainer?: Pick<
      IThemeClasses,
      "marginBottom" | "marginRight" | "width"
    >;
    wrapper?: Pick<IThemeClasses, "flexFlow">;
  };
}
