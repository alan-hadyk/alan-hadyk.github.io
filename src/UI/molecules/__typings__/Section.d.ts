import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface SectionProps {
  children: JSX.Element | JSX.Element[] | string;
  id: string;
  minHeight?: typeof spacing[SpacingKeys] | "100vh";
  title?: string;
}
