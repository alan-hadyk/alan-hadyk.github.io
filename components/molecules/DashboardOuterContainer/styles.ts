import { IThemeClasses } from "types/theme";

export const dashboardOuterContainerDefaultThemeClasses: IThemeClasses = {
  height: "h-100vh",
  paddingTop: "pt-96"
};

export const dashboardOuterContainerChildrenOuterWrapperDefaultThemeClasses: IThemeClasses =
  {
    height: "h-100%",
    position: "relative"
  };

export const dashboardOuterContainerChildrenInnerWrapperDefaultThemeClasses: IThemeClasses =
  {
    alignItems: "items-center",
    display: "flex",
    flexFlow: "flex-col-nowrap",
    height: "h-100%",
    justifyContent: "justify-between"
  };
