import { IThemeClasses } from "@app/types/theme";

export const verticalIconsDefaultThemeClasses: Record<
  "icon" | "iconContainer" | "iconsWrapper",
  IThemeClasses
> = {
  icon: {
    height: "h-32",
  },
  iconContainer: {
    height: "h-32",
  },
  iconsWrapper: {
    alignItems: "items-center",
    display: "flex",
    flex: "flex-[0_0_9.2rem]",
    flexFlow: "flex-col-nowrap",
    gap: "gap-12",
  },
};
