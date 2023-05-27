import { ImageDynamicVariant } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { IThemeClasses } from "@app/types/theme";

export const convertVariantsToStyles = (
  variants: ImageDynamicVariant[],
  imageDynamicBaseThemeClasses: IThemeClasses,
) => {
  let themeClasses: IThemeClasses = {};

  if (
    variants.includes(ImageDynamicVariant.Responsive) ||
    variants.includes(ImageDynamicVariant.HeightResponsive)
  ) {
    themeClasses.height = "h-full";
  } else {
    themeClasses.height = "h-auto";
  }

  if (
    variants.includes(ImageDynamicVariant.Responsive) &&
    !variants.includes(ImageDynamicVariant.HeightResponsive)
  ) {
    themeClasses.width = "w-full";
  } else {
    themeClasses.width = "w-auto";
  }

  if (variants.includes(ImageDynamicVariant.Active)) {
    themeClasses.pseudoClasses = [
      "childrenMask:fill-blue300",
      "childrenPath:fill-blue300",
    ];
  }

  if (variants.includes(ImageDynamicVariant.GlowAnimation)) {
    themeClasses.animate = imageDynamicBaseThemeClasses.animate;
  }

  if (variants.includes(ImageDynamicVariant.Glow)) {
    themeClasses.dropShadow = "drop-shadow-lg";
  }

  if (variants.includes(ImageDynamicVariant.GlowOnHover)) {
    themeClasses = {
      ...themeClasses,
      active: "active:drop-shadow-lg",
      focus: "focus:drop-shadow-lg",
      hover: "hover:drop-shadow-lg",
      transition: "transition-all",
      transitionDuration: imageDynamicBaseThemeClasses.transitionDuration,
      transitionTiming: "ease-in-out",
    };
  }

  return themeClasses;
};
