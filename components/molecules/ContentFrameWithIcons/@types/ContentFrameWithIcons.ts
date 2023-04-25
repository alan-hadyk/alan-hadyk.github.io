import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IIconsWithLabelsProps } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";
import { IThemeClasses } from "types/theme";

export enum ContentFrameWithIconsVariant {
  Full,
  Limited
}

export interface IContentFrameWithIconsProps {
  iconsWithLabels: IIconWithLabelProps[];
  title: string;
  variant?: ContentFrameWithIconsVariant;
}

export interface IContentFrameWithIconsThemeClasses {
  contentFrame: IContentFrameProps["themeClasses"];
  iconsWithLabels: IIconsWithLabelsProps["themeClasses"];
  iconsWrapper: IThemeClasses;
}
