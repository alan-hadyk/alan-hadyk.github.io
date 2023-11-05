import { ILayoutContainerProps } from "@app/components/layout/LayoutContainer/@types/LayoutContainer";
import { horizontalImages } from "@app/components/molecules/HorizontalImages/config";
import { isSafari } from "@app/helpers/browser/isSafari";
import { IThemeClasses } from "@app/types/theme";

export const horizontalImagesDefaultThemeClasses: IThemeClasses = {
  height: "h-100%",
  padding: "p-8",
  width: "w-100%",
};

export const horizontalImagesContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-100%",
  justifyContent: "justify-center",
};

export const horizontalImagesImageWrapperDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-auto" : "h-100%",
  position: "relative",
};

export const horizontalImagesImageWrapperDefaultStyles: ILayoutContainerProps["style"] =
  {
    width: `${Number(Number(100 / horizontalImages.length).toFixed(2))}%`,
  };

export const horizontalImagesImageDefaultThemeClasses: IThemeClasses = {
  height: isSafari() ? "h-[8vh]" : "h-100%",
  width: isSafari() ? "w-[8vh]" : "w-100%",
};
