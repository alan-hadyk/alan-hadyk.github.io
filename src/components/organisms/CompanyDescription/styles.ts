import { IThemeClasses } from "@app/types/theme";

export const companyDescriptionDefaultThemeClasses: Record<
  "container" | "outstandingIcons",
  IThemeClasses
> = {
  container: {
    mediaQuery: ["msHighContrastNone:w-100%", "msHighContrastActive:w-100%"],
  },
  outstandingIcons: {
    display: "flex",
    flexFlow: "flex-col-nowrap",
    gap: "gap-16",
    marginY: "my-32",
  },
};
