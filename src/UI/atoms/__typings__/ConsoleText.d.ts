import {
  FontFamilies,
  FontSizes,
  Spacing
} from "styles/variables/__typings__/variables";

export interface ConsoleTextProps {
  dataTestId?: string;
  fontFamily?: FontFamilies;
  fontSize: FontSizes | string;
  height: Spacing | string;
  lineHeight: Spacing | string;
  transform: string;
  width: Spacing | string;
}
