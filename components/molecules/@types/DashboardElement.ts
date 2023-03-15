import { TChildren } from "types/props";
import { IThemeClasses } from "types/theme";

export interface IDashboardElementProps
  extends Pick<IThemeClasses, "alignSelf" | "flex" | "order"> {
  children: TChildren;
  description?: string;
  overflow?: "overflow-visible" | "overflow-hidden";
  shouldDisplayBorder?: boolean;
  shouldDisplayCorners?: boolean;
  title?: string;
  titleFontSize?: "text-16" | "text-28";
  titleOverflow?: "overflow-visible" | "overflow-hidden";
}
