import React from "react";
import { IThemeClasses } from "types/theme";
import { TChildren } from "types/props";

export type TLayoutContainerElementType =
  | HTMLDivElement
  | HTMLElement
  | HTMLFormElement;

export interface ILayoutContainerProps {
  as?: "div" | "nav" | "header" | "main";
  children?: TChildren;
  id?: string;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
  themeClasses?: IThemeClasses;
}
