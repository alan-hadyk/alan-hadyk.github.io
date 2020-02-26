import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface SpacingContainerProps {
  children: JSX.Element | JSX.Element[] | string;
  id?: string;
  marginBottom?: typeof spacing[SpacingKeys];
  marginLeft?: typeof spacing[SpacingKeys];
  marginRight?: typeof spacing[SpacingKeys];
  marginTop?: typeof spacing[SpacingKeys];
  minHeight?: typeof spacing[SpacingKeys] | "100vh";
  paddingBottom?: typeof spacing[SpacingKeys];
  paddingLeft?: typeof spacing[SpacingKeys];
  paddingRight?: typeof spacing[SpacingKeys];
  paddingTop?: typeof spacing[SpacingKeys];
}
