import { ITypographyProps } from "components/atoms/@types/Typography";
import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "iconName" | "label" | "isStaticImg"
  >[];
  labelColor?: ITypographyProps["color"];
  size?: "small" | "medium" | "large";
}
