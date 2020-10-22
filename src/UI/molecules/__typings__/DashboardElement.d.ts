import { FlexItemProps } from "<layout>/__typings__/FlexItem.d.ts";

export interface DashboardElementProps extends FlexItemProps {
  dataCy?: string;
  dataTestId?: string;
  description?: string;
  overflow?: "visible" | "hidden";
  shouldDisplayBorder?: boolean;
  shouldDisplayCorners?: boolean;
  title: string;
  titleFontSize?: "font16" | "font28";
  titleOverflow?: "visible" | "hidden";
}
