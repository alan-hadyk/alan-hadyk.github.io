import { IconProps } from "UI/atoms/__typings__/Icon";
import { Spacing } from "styles/variables/__typings__/variables";

export interface LinkWithIconProps {
  dataCy?: string;
  dataTestId?: string;
  height?: Spacing | "unset" | "50%" | "100%" | "auto";
  href: string;
  iconName: IconProps["iconName"];
  isExternal?: boolean;
  width?: string | Spacing;
}
