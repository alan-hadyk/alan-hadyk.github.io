import { FlexContainerProps } from "<layout>/__typings__/FlexContainer.d.ts";
import { Spacing } from "<styles>/variables/__typings__/variables.d.ts";
export interface HexagonWithDescriptionContentProps {
  children: JSX.Element;
  description: JSX.Element;
  flexFlow?: FlexContainerProps["flexFlow"];
  lineHeight?: Spacing;
  marginBottom?: Spacing;
  marginRight?: Spacing;
  width?: string;
}