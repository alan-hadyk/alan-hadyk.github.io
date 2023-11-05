import { IThemeClasses } from "@app/types/theme";

export const verticalLabelsDefaultThemeClasses: Record<
  "labelsWrapper",
  IThemeClasses
> = {
  labelsWrapper: {
    alignItems: "items-start",
    display: "flex",
    flexFlow: "flex-col-nowrap",
  },
};
