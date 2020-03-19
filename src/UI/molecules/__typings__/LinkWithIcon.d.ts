import { IconProps } from "<atoms>/__typings__/Icon.d.ts";
import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface LinkWithIconProps {
  height: Spacing;
  href: string;
  iconName: IconProps["iconName"];
  isExternal?: boolean;
  width?: string | Spacing;
}
