import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

export interface DashboardElementProps extends FlexItemProps {
  dataTestId?: string;
  description?: string;
  overflow?: "visible" | "hidden";
  shouldDisplayCorners?: boolean;
  title: string;
  titleFontSize?: "font16" | "font28";
}
