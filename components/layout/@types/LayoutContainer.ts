import React from "react";
import { IThemeClasses, TSpacingValues, TZIndexValues } from "types/theme";
import { TChildren } from "types/props";

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
  bottom?: `bottom-${TSpacingValues}` | `bottom-[${string}]`;
  children?: TChildren;
  className?: string;
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
  flex?:
    | `flex-[${number}_${number}_${number}%]`
    | `flex-[${number}_${number}_${number}rem]`;
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
  height?:
    | `h-${TSpacingValues}`
    | `h-[${string}]`
    | `${number}%`
    | `${number}px`
    | `${number}rem`;
  id?: string;
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  left?: `left-${TSpacingValues}`;
  marginBottom?: `mb-${TSpacingValues}` | `mb-[${string}]`;
  marginLeft?: `ml-${TSpacingValues}`;
  marginRight?: `mr-${TSpacingValues}`;
  marginTop?: `mt-${TSpacingValues}` | `mt-[${string}]`;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  order?: `order-${number}` | "order-first" | "order-last" | "order-none";
  padding?: `p-${TSpacingValues}` | `p-[${string}]`;
  paddingBottom?: `pb-${TSpacingValues}` | `pb-[${string}]`;
  paddingLeft?: `pl-${TSpacingValues}` | `pl-[${string}]`;
  paddingRight?: `pr-${TSpacingValues}` | `pr-[${string}]`;
  paddingTop?: `pt-${TSpacingValues}` | `pt-[${string}]`;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  right?: `right-${TSpacingValues}`;
  style?: React.CSSProperties;
  themeClasses?: IThemeClasses;
  top?: `top-${TSpacingValues}`;
  width?:
    | `w-${TSpacingValues}`
    | `w-[${string}]`
    | `${number}%`
    | `${number}px`
    | `${number}rem`;
  zIndex?: `z-${TZIndexValues}`;
}
