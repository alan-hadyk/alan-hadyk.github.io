import {
  Spacing
} from "<styles>/variables/__typings__/variables";

export interface SectionProps {
  children: JSX.Element | JSX.Element[] | string;
  id: string;
  minHeight?: Spacing | "100vh";
  title?: string;
}
