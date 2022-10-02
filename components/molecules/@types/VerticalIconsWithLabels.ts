import { ITextProps } from "components/atoms/@types/Text";
import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "iconName" | "label" | "isStaticImg"
  >[];
  labelColor?: ITextProps["color"];
  size?: "small" | "medium" | "large";
}
