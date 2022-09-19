import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren, TSpacing } from "types/props";

export interface ILinkProps {
  alignItems?: ILayoutContainerProps["alignItems"];
  children: TChildren;
  dataCy?: string;
  display?: "block" | "inline" | "flex";
  height?: `h-${TSpacing}`;
  href: string;
  isExternal?: boolean;
  isHoverable?: boolean;
  justifyContent?: ILayoutContainerProps["justifyContent"];
  width?: string | `w-${TSpacing}`;
}

export type LinkContainerProps = Partial<ILinkProps>;

export interface RenderChildrenArgs {
  children: ILinkProps["children"];
  isHoverable?: ILinkProps["isHoverable"];
}
