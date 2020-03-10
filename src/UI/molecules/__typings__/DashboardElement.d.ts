import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem";

import {
  Spacing
} from "<styles>/variables/__typings__/variables";

export interface DashboardElementProps extends FlexItemProps {
  childrenHeight?: Spacing | "unset";
  dataTestId?: string;
  shouldDisplayCorners?: boolean;
  title: string;
}
