import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface SpacingContainerProps {
  children: JSX.Element | JSX.Element[] | string;
  dataTestId?: string;
  height?: Spacing | string;
  id?: string;
  marginBottom?: Spacing | string;
  marginLeft?: Spacing | string;
  marginRight?: Spacing | string;
  marginTop?: Spacing | string;
  maxWidth?: Spacing | string;
  minHeight?: Spacing | "100vh";
  paddingBottom?: Spacing | string;
  paddingLeft?: Spacing | string;
  paddingRight?: Spacing | string;
  paddingTop?: Spacing | string;
  width?: string | Spacing;
}
