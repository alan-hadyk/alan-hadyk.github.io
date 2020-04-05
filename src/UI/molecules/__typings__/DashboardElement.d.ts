import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

export interface DashboardElementProps extends FlexItemProps {
  dataTestId?: string;
  overflow?: "visible" | "hidden";
  shouldDisplayCorners?: boolean;
  shuffleDelay?: number;
  title: string;
}
