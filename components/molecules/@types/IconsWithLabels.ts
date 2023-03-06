import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { ITypographyProps } from "components/atoms/@types/Typography";

type TGap =
  | `directChildren:mr-${number} directChildren:mb-${number}`
  | `directChildren:mt-${number} firstdirectChild:mt-${number}`;

export interface IIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  labelColor?: ITypographyProps["color"];
  position?: "vertical" | "horizontal";
  size?: IIconWithLabelProps["size"];
}
export interface IMapSizeToFlexContainerGap {
  horizontal: {
    large: TGap;
    medium: TGap;
    small: TGap;
  };
  vertical: {
    large: TGap;
    medium: TGap;
    small: TGap;
  };
}
