import { Spacing }from "<styles>/variables/__typings__/variables";

export interface LinkProps {
  children: JSX.Element | JSX.Element[] | string;
  display?: "block" | "inline";
  height?: Spacing | "unset" | "50%" | "100%";
  href: string;
  isExternal?: boolean;
}
