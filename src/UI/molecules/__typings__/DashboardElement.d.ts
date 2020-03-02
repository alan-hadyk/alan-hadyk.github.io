import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem";

import {
  Spacing
} from "<styles>/variables/__typings__/variables";

export interface DashboardElementProps extends FlexItemProps {
  alignSelf?: "auto";
  children: JSX.Element | JSX.Element[];
  childrenHeight?: Spacing | "unset";
  flex: string;
  order?: 0;
  shouldDisplayCorners?: boolean;
  title: string;
}
