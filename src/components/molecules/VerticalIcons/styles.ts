import { VerticalIconSize } from "@app/components/molecules/VerticalIcons/@types/VerticalIcons";
import { IThemeClasses } from "@app/types/theme";

export const verticalIconsDefaultThemeClasses: Record<
  "iconsWrapper",
  IThemeClasses
> = {
  iconsWrapper: {
    alignItems: "items-center",
    display: "flex",
    flexFlow: "flex-col-nowrap",
  },
};

export const mapSizeToIconHeight: Record<
  VerticalIconSize,
  IThemeClasses["height"]
> = {
  [VerticalIconSize.ExtraSmall]: "h-24",
  [VerticalIconSize.Large]: "h-40",
  [VerticalIconSize.Medium]: "h-32",
  [VerticalIconSize.Small]: "h-28",
};

export const mapSizeToWrapperStyles: Record<VerticalIconSize, IThemeClasses> = {
  [VerticalIconSize.ExtraSmall]: {
    gap: "gap-0",
  },
  [VerticalIconSize.Large]: {
    gap: "gap-12",
  },
  [VerticalIconSize.Medium]: {
    gap: "gap-12",
  },
  [VerticalIconSize.Small]: {
    gap: "gap-0",
  },
};

export const mapSizeToIconStyles: Record<VerticalIconSize, IThemeClasses> = {
  [VerticalIconSize.ExtraSmall]: {},
  [VerticalIconSize.Large]: {},
  [VerticalIconSize.Medium]: {},
  [VerticalIconSize.Small]: {
    maxWidth: "max-w-16",
  },
};

export const mapSizeToIconsWrapperStyles: Record<
  VerticalIconSize,
  IThemeClasses
> = {
  [VerticalIconSize.ExtraSmall]: {
    flex: "flex-[0_0_2.4rem]",
  },
  [VerticalIconSize.Large]: {
    flex: "flex-[0_0_9.2rem]",
  },
  [VerticalIconSize.Medium]: {
    flex: "flex-[0_0_9.2rem]",
  },
  [VerticalIconSize.Small]: {
    alignItems: "items-start",
    flex: "flex-[0_0_12.5%]",
  },
};
