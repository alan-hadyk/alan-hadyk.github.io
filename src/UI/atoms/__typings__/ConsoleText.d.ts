import {
  FontSizes,
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface ConsoleTextProps {
  dataTestId?: string;
  fontSize: FontSizes | string;
  height: Spacing | string;
  lineHeight: Spacing | string;
  transform: string;
  width: Spacing | string;
}
