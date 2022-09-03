import { TChildren, TSpacing } from "types/props";

export interface ILinkProps {
  children: TChildren;
  dataCy?: string;
  dataTestId?: string;
  display?: "block" | "inline";
  height?: `h-${TSpacing}`;
  href: string;
  isExternal?: boolean;
  isHoverable?: boolean;
  width?: string | `w-${TSpacing}`;
}

export type LinkContainerProps = Partial<ILinkProps>;

export interface RenderChildrenArgs {
  children: ILinkProps["children"];
  isHoverable?: ILinkProps["isHoverable"];
}
