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

export const verticalIconsWithLabelsIconContainerDefaultThemeClasses: IThemeClasses =
  {
    marginBottom: "mb-12"
  };

export const verticalIconsWithLabelsLabelsWrapperDefaultThemeClasses: IThemeClasses =
  {
    flex: "flex-[0_0_75%]"
  };

export const verticalIconsWithLabelsLabelContainerDefaultThemeClasses: IThemeClasses =
  {
    height: "h-32",
    marginBottom: "mb-12"
  };

export const verticalIconsWithLabelsLabelDefaultThemeClasses: IThemeClasses = {
  color: "text-blue100",
  lineHeight: "leading-32"
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
    flex: "flex-[0_0_25%]"
  }
};
