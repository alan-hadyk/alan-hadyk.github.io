import { ReactNode } from "react";
import { TChildren } from "types/props";

export interface IPdfLayoutProps {
  children: ReactNode;
  sidebar: TChildren;
  title: string;
}
