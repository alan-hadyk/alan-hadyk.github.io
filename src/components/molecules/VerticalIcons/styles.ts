import { VerticalIconsSize } from "@app/components/molecules/VerticalIcons/@types/VerticalIcons";
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
  VerticalIconsSize,
  IThemeClasses["height"]
> = {
  [VerticalIconsSize.ExtraSmall]: "h-24",
  [VerticalIconsSize.Large]: "h-40",
  [VerticalIconsSize.Medium]: "h-32",
  [VerticalIconsSize.Small]: "h-28",
};

export const mapSizeToWrapperStyles: Record<VerticalIconsSize, IThemeClasses> =
  {
    [VerticalIconsSize.ExtraSmall]: {
      gap: "gap-0",
    },
    [VerticalIconsSize.Large]: {
      gap: "gap-12",
    },
    [VerticalIconsSize.Medium]: {
      gap: "gap-12",
    },
    [VerticalIconsSize.Small]: {
      gap: "gap-0",
    },
  };

export const mapSizeToIconStyles: Record<VerticalIconsSize, IThemeClasses> = {
  [VerticalIconsSize.ExtraSmall]: {},
  [VerticalIconsSize.Large]: {},
  [VerticalIconsSize.Medium]: {},
  [VerticalIconsSize.Small]: {
    maxWidth: "max-w-16",
  },
};

export const mapSizeToIconsWrapperStyles: Record<
  VerticalIconsSize,
  IThemeClasses
> = {
  [VerticalIconsSize.ExtraSmall]: {
    flex: "flex-[0_0_2.4rem]",
  },
  [VerticalIconsSize.Large]: {
    flex: "flex-[0_0_9.2rem]",
  },
  [VerticalIconsSize.Medium]: {
    flex: "flex-[0_0_9.2rem]",
  },
  [VerticalIconsSize.Small]: {
    alignItems: "items-start",
    flex: "flex-[0_0_12.5%]",
  },
};
