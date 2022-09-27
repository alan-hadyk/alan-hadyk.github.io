import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TSpacingValues } from "types/theme";
import { TChildren } from "types/props";

export interface ILinkProps {
  alignItems?: ILayoutContainerProps["alignItems"];
  children: TChildren;
  dataCy?: string;
  display?: "block" | "inline" | "flex";
  height?: `h-${TSpacingValues}`;
  href: string;
  isExternal?: boolean;
  isHoverable?: boolean;
  justifyContent?: ILayoutContainerProps["justifyContent"];
  width?: string | `w-${TSpacingValues}`;
}

export type LinkContainerProps = Partial<ILinkProps>;

export interface RenderChildrenArgs {
  children: ILinkProps["children"];
  isHoverable?: ILinkProps["isHoverable"];
}
