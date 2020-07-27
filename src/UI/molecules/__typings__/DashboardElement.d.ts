import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

export interface DashboardElementProps extends FlexItemProps {
  dataTestId?: string;
  description?: string;
  device?: "desktop" | "tablet"; 
  overflow?: "visible" | "hidden";
  shouldDisplayBorder?: boolean;
  shouldDisplayCorners?: boolean;
  title: string;
  titleFontSize?: "font16" | "font28";
}
