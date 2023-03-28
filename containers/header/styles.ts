import { IThemeClasses } from "types/theme";

export const HeaderContainerDesktopDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-48",
  justifyContent: "justify-start",
  pseudoClasses: ["directChildren:ml-24", "firstdirectChild:ml-0"]
};

export const headerContainerTvDefaultThemeClasses: IThemeClasses = {
  color: "text-blue100",
  fontFamily: "font-anonymousPro",
  fontSize: "text-24",
  fontWeight: "font-bold",
  lineHeight: "leading-32"
};
