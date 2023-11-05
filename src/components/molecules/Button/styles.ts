import {
  TMapSizeToButtonContainerProps,
  ButtonSize,
  ButtonType,
} from "@app/components/molecules/Button/@types/Button";
import { IThemeClasses } from "@app/types/theme";

export const mapTypeToButtonContainerProps: Record<ButtonType, IThemeClasses> =
  {
    [ButtonType.Primary]: {
      backgroundColor: "bg-blue500",
      borderStyle: "border-none",
    },
    [ButtonType.Secondary]: {
      backgroundColor: "bg-transparent",
      borderColor: "border-blue500",
      borderStyle: "border-solid",
      borderWidth: "border-1",
    },
  };

export const mapSizeToButtonContainerProps: TMapSizeToButtonContainerProps = {
  [ButtonSize.Large]: {
    height: "h-56",
  },
  [ButtonSize.Medium]: {
    height: "h-48",
  },
  [ButtonSize.Small]: {
    height: "h-40",
  },
};

export const buttonDefaultThemeClasses: IThemeClasses = {
  active: "active:shadow-active-button",
  color: "text-white",
  cursor: "cursor-pointer",
  focus: "focus:shadow-active-button",
  hover: "hover:shadow-active-button",
  outline: "outline-0",
  position: "relative",
  textTransform: "lowercase",
  transition: "transition-all",
  transitionDuration: "duration-fast",
  transitionTiming: "ease-in-out",
  userSelect: "select-none",
  width: "w-auto",
};

export const buttonInnerContainerDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  height: "h-full",
  justifyContent: "justify-center",
  overflow: "overflow-hidden",
  position: "relative",
};

export const buttonChildrenOuterWrapperDefaultThemeClasses: IThemeClasses = {
  width: "w-full",
};

export const buttonChildrenWrapperDefaultThemeClasses: IThemeClasses = {
  alignItems: "items-center",
  display: "flex",
  flexFlow: "flex-row-nowrap",
  justifyContent: "justify-center",
};
