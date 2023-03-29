import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

type TOverflow = Extract<
  IThemeClasses["overflow"],
  "overflow-visible" | "overflow-hidden"
>;

export interface IContentFrameProps {
  children: TChildren;
  description?: string;
  shouldDisplayBorder?: boolean;
  shouldDisplayCorners?: boolean;
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
}
