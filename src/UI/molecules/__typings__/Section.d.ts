import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface SectionProps {
  children: JSX.Element | JSX.Element[] | string;
  dataCy?: string;
  dataTestId?: string;
  id: string;
  minHeight?: Spacing | "100vh";
  title?: string;
}
