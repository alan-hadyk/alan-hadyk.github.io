import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { TGap } from "types/theme";

export enum IconsWithLabelsPosition {
  Horizontal,
  Vertical
}

export interface IIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  position?: IconsWithLabelsPosition;
  size?: IIconWithLabelProps["size"];
  themeClasses?: {
    iconWithLabel?: IIconWithLabelProps["themeClasses"];
  };
}

export type TMapSizeToFlexContainerGap = Record<
  IconsWithLabelsPosition,
  Record<IconWithLabelSize, TGap>
>;
