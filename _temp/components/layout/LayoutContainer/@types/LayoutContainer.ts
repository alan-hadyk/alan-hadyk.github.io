import React from "react";
import { IThemeClasses } from "types/theme";
import { TChildren } from "types/props";

export type TLayoutContainerElementType = HTMLDivElement | HTMLElement;

export interface ILayoutContainerProps {
  as?: "div" | "nav" | "header" | "main" | "ul";
  children?: TChildren;
  className?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement> | (() => void);
  style?: React.CSSProperties;
  tabIndex?: number;
  themeClasses?: IThemeClasses;
}
