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
  alignSelf?:
    | "self-auto"
    | "self-start"
    | "self-end"
    | "self-center"
    | "self-stretch"
    | "self-baseline";
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
  flex?: `flex-[${number}_${number}_${number}%]`;
  flexFlow?:
    | "flex-row flex-wrap"
    | "flex-row-reverse flex-wrap"
    | "flex-col flex-wrap"
    | "flex-col-reverse flex-wrap"
    | "flex-row flex-wrap-reverse"
    | "flex-row-reverse flex-wrap-reverse"
    | "flex-col flex-wrap-reverse"
    | "flex-col-reverse flex-wrap-reverse"
    | "flex-row flex-nowrap"
    | "flex-row-reverse flex-nowrap"
    | "flex-col flex-nowrap"
    | "flex-col-reverse flex-nowrap";
  height?: `h-${TSpacing}` | `h-[${string}]` | `${number}%` | `${number}px`;
  id?: string;
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  left?: `left-${TSpacing}`;
  marginBottom?: `mb-${TSpacing}` | `mb-[${string}]`;
  marginLeft?: `ml-${TSpacing}`;
  marginRight?: `mr-${TSpacing}`;
  marginTop?: `mt-${TSpacing}` | `mt-[${string}]`;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  order?: `order-${number}` | "order-first" | "order-last" | "order-none";
  padding?: `p-${TSpacing}` | `p-[${string}]`;
  paddingBottom?: `pb-${TSpacing}` | `pb-[${string}]`;
  paddingLeft?: `pl-${TSpacing}` | `pl-[${string}]`;
  paddingRight?: `pr-${TSpacing}` | `pr-[${string}]`;
  paddingTop?: `pt-${TSpacing}` | `pt-[${string}]`;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  right?: `right-${TSpacing}`;
  style?: React.CSSProperties;
  top?: `top-${TSpacing}`;
  width?: `w-${TSpacing}` | `w-[${string}]` | `${number}%` | `${number}px`;
  zIndex?: `z-${TZIndex}`;
}
