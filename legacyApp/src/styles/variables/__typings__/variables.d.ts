import breakpoints from "styles/variables/breakpoints";
import colorPalette from "styles/variables/colorPalette";
import fontSizes from "styles/variables/fontSizes";
import fontWeights from "styles/variables/fontWeights";
import fontFamilies from "styles/variables/fontFamilies";
import spacing from "styles/variables/spacing";
import transitionTimes from "styles/variables/transitionTimes";
import zIndex from "styles/variables/zIndex";

export type Breakpoints = keyof typeof breakpoints;
export type ColorPalette = keyof typeof colorPalette;
export type FontFamilies = keyof typeof fontFamilies;
export type FontSizes = keyof typeof fontSizes;
export type FontWeights = keyof typeof fontWeights;
export type Spacing = keyof typeof spacing;
export type TransitionTimes = keyof typeof transitionTimes;
export type ZIndex = keyof typeof zIndex;
