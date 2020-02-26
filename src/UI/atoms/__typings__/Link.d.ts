import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface LinkProps {
  children: JSX.Element | JSX.Element[] | string;
  display?: "block" | "inline";
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  href: string;
  isExternal?: boolean;
}
