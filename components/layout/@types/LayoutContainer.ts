import React from "react";
import { TChildren, TSpacing, TZIndex } from "types/props";

export type TLayoutContainerElementType =
  | HTMLDivElement
  | HTMLElement
  | HTMLFormElement;
export interface ILayoutContainerProps {
  alignItems?:
    | "items-start"
    | "items-end"
    | "items-center"
    | "items-baseline"
    | "items-stretch";
  as?:
    | "div"
    | "main"
    | "section"
    | "article"
    | "header"
    | "footer"
    | "nav"
    | "form"
    | "table"
    | "a"
    | "button";
  bottom?: `bottom-${TSpacing}`;
  children?: TChildren;
  className?: string;
  dataCy?: string;
  display?:
    | "block"
    | "inline-block"
    | "inline"
    | "flex"
    | "inline-flex"
    | "table"
    | "inline-table"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row-group"
    | "table-row"
    | "flow-root"
    | "grid"
    | "inline-grid"
    | "contents"
    | "list-item"
    | "hidden";
  height?: `h-${TSpacing}`;
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  left?: `left-${TSpacing}`;
  marginBottom?: `mb-${TSpacing}`;
  marginLeft?: `ml-${TSpacing}`;
  marginRight?: `mr-${TSpacing}`;
  marginTop?: `mt-${TSpacing}`;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  padding?: `p-${TSpacing}`;
  paddingBottom?: `pb-${TSpacing}` | number;
  paddingLeft?: `pl-${TSpacing}` | number;
  paddingRight?: `pr-${TSpacing}` | number;
  paddingTop?: `pt-${TSpacing}` | number;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  right?: `right-${TSpacing}`;
  style?: React.CSSProperties;
  top?: `top-${TSpacing}`;
  width?: `w-${TSpacing}`;
  zIndex?: `z-${TZIndex}`;
}
