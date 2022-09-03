import { ReactElementLike, ReactNodeArray } from "prop-types";
import { ReactNode } from "react";

import tailwindConfig from "tailwind.config";

export type TChildren =
  | string
  | number
  | boolean
  | ReactElementLike
  | Iterable<ReactNode>
  | ReactNodeArray
  | undefined
  | null;

export type TSpacing = keyof typeof tailwindConfig.theme.spacing;
export type TAnimationName = keyof typeof tailwindConfig.theme.animation;
export type TDuration = keyof typeof tailwindConfig.theme.transitionDuration;
export type TZIndex = keyof typeof tailwindConfig.theme.zIndex;
export type TColor = keyof typeof tailwindConfig.theme.colors;
