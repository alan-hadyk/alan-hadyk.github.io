import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface SectionProps {
  children: JSX.Element | JSX.Element[] | string;
  id: string;
  minHeight?: Spacing | "100vh" | "200vh";
  title?: string;
}
