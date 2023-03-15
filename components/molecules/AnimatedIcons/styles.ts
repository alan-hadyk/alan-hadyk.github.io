import { ILayoutContainerProps } from "components/layout/LayoutContainer/@types/LayoutContainer";
import { animatedIcons } from "components/molecules/AnimatedIcons/config";
import { isSafari } from "helpers/browser/isSafari";
import { IThemeClasses } from "types/theme";

export const animatedIconsDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  padding: "p-8",
  width: "w-100%"
};

export const animatedIconsContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-100%",
  justifyContent: "justify-center"
};

export const animatedIconsIconWrapperDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-auto" : "h-100%",
  position: "relative"
};

export const animatedIconsIconWrapperDefaultStyles: ILayoutContainerProps["style"] =
  {
    width: `${Number(Number(100 / animatedIcons.length).toFixed(2))}%`
  };

export const animatedIconsIconDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-[8vh]" : "h-100%",
  width: isSafari() ? "w-[8vh]" : "w-100%"
};
