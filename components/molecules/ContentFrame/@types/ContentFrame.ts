import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

type TOverflow = Extract<
  IThemeClasses["overflow"],
  "overflow-visible" | "overflow-hidden"
>;

export enum ContentFrameVariant {
  Border,
  Corners,
  CornersWithBorder,
  Empty
}

export enum ContentFrameTitleVariant {
  Small,
  Medium,
  Large
}

export interface IContentFrameProps {
  children: TChildren;
  description?: string;
  themeClasses?: {
    children?: {
      overflow?: TOverflow;
    };
    container?: Pick<IThemeClasses, "alignSelf" | "flex" | "order"> & {
      overflow?: TOverflow;
    };
    title?: IThemeClasses;
  };
  title?: string;
  titleVariant?: ContentFrameTitleVariant;
  variant?: ContentFrameVariant;
}
