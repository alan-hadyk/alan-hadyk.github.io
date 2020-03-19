import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface SpacingContainerProps {
  children: JSX.Element | JSX.Element[] | string;
  dataTestId?: string;
  height?: Spacing | string;
  id?: string;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  marginTop?: Spacing;
  minHeight?: Spacing | "100vh";
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingTop?: Spacing;
  width?: string | Spacing;
}
