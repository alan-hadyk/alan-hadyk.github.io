import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export interface IIconWithLabelContentProps {
  iconName: IIconStaticProps["iconName"];
  isHoverable?: boolean;
  label: string;
  size?: IconWithLabelSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "groupHover" | "color">;
  };
}
