import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

export interface DashboardElementProps extends FlexItemProps {
  dataTestId?: string;
  description?: string;
  shouldDisplayCorners?: boolean;
  shuffleDelay?: number;
  title: string;
}
