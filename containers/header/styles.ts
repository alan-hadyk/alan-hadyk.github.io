import { IThemeClasses } from "types/theme";

export const headerContainerDesktopDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-48",
  justifyContent: "justify-start",
  pseudoClasses: ["directChildren:ml-24", "firstdirectChild:ml-0"]
};

export const headerContainerTvDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-48",
  justifyContent: "justify-start",
  pseudoClasses: ["directChildren:ml-24", "firstdirectChild:ml-0"]
};
