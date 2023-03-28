import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export const verticalIconsWithLabelsDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  height: "h-100%",
  justifyContent: "justify-center",
  width: "w-100%"
};

export const verticalIconsWithLabelsIconsWrapperDefaultThemeClasses: IThemeClasses =
  {
    alignItems: "items-center",
    display: "flex",
    flex: "flex-[0_0_9.2rem]",
    flexFlow: "flex-col-nowrap"
  };

export const mapSizeToContainerStyles: Record<
  IconWithLabelSize,
  IThemeClasses
> = {
  [IconWithLabelSize.Large]: {
    marginBottom: "mb-12"
  },
  [IconWithLabelSize.Medium]: {
    marginBottom: "mb-12"
  },
  [IconWithLabelSize.Small]: {
    marginBottom: "mb-0"
  }
};

export const mapSizeToIconsWrapperStyles: Record<
  IconWithLabelSize,
  IThemeClasses
> = {
  [IconWithLabelSize.Large]: {
    flex: "flex-[0_0_9.2rem]"
  },
  [IconWithLabelSize.Medium]: {
    flex: "flex-[0_0_9.2rem]"
  },
  [IconWithLabelSize.Small]: {
    alignItems: "items-start",
    flex: "flex-[0_0_12.5%]"
  }
};

export const mapSizeToIconStyles: Record<IconWithLabelSize, IThemeClasses> = {
  [IconWithLabelSize.Large]: {},
  [IconWithLabelSize.Medium]: {},
  [IconWithLabelSize.Small]: {
    maxWidth: "max-w-16"
  }
};

export const mapSizeToLabelsWrapperStyles: Record<
  IconWithLabelSize,
  IThemeClasses
> = {
  [IconWithLabelSize.Large]: {
    flex: "flex-[0_0_75%]"
  },
  [IconWithLabelSize.Medium]: {
    flex: "flex-[0_0_75%]"
  },
  [IconWithLabelSize.Small]: {
    flex: "flex-[0_0_87.5%]"
  }
};

export const mapSizeToLabelStyles: Record<IconWithLabelSize, IThemeClasses> = {
  [IconWithLabelSize.Large]: {
    lineHeight: "leading-40"
  },
  [IconWithLabelSize.Medium]: {
    lineHeight: "leading-32"
  },
  [IconWithLabelSize.Small]: {
    lineHeight: "leading-28"
  }
};
