import { FlexContainerProps } from "UI/layout/__typings__/FlexContainer";
import { Spacing } from "styles/variables/__typings__/variables";
export interface HexagonWithDescriptionContentProps {
  children: JSX.Element;
  description: JSX.Element;
  flexFlow?: FlexContainerProps["flexFlow"];
  lineHeight?: Spacing;
  marginBottom?: Spacing;
  marginRight?: Spacing;
  textWidth?: Spacing | string;
  width?: Spacing | string;
}
