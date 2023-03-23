import { IThemeClasses } from "types/theme";

export const dashboardInnerContainerDefaultThemeClasses: IThemeClasses = {
  marginBottom: "mb-0",
  marginTop: "mt-0",
  width: "w-100%"
};

export const dashboardInnerContainerChildrenWrapperDefaultThemeClasses: IThemeClasses =
  {
    alignItems: "items-stretch",
    display: "flex",
    flexFlow: "flex-row-nowrap",
    height: "h-100%",
    justifyContent: "justify-center",
    pseudoClasses: ["directChildren:ml-48", "firstdirectChild:ml-0"]
  };
