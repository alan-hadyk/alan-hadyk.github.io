import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface DashboardElementProps extends FlexItemProps {
  childrenHeight?: Spacing | string;
  dataTestId?: string;
  shouldDisplayCorners?: boolean;
  shuffleDelay?: number;
  title: string;
}
