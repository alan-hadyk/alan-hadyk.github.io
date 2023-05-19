import { ImageDynamicVariant } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { IThemeClasses } from "@app/types/theme";

export const generatePseudoClasses = (
  variants: ImageDynamicVariant[],
  imageDynamicBaseThemeClasses: IThemeClasses,
) => {
  const pseudoClasses = [];

  if (
    variants.includes(ImageDynamicVariant.Responsive) ||
    variants.includes(ImageDynamicVariant.HeightResponsive)
  ) {
    pseudoClasses.push("childrenSvg:h-full");
  } else {
    pseudoClasses.push("childrenSvg:h-auto");
  }

  if (
    variants.includes(ImageDynamicVariant.Responsive) &&
    !variants.includes(ImageDynamicVariant.HeightResponsive)
  ) {
    pseudoClasses.push("childrenSvg:w-full");
  } else {
    pseudoClasses.push("childrenSvg:w-auto");
  }

  if (variants.includes(ImageDynamicVariant.Active)) {
    pseudoClasses.push(
      "childrenMask:fill-blue300",
      "childrenPath:fill-blue300",
    );
  }

  if (variants.includes(ImageDynamicVariant.Glow)) {
    pseudoClasses.push("childrenSvg:drop-shadow-lg");
  }

  if (variants.includes(ImageDynamicVariant.GlowOnHover)) {
    pseudoClasses.push(
      "childrenSvg:transition-all",
      "childrenSvg:ease-in-out",
      imageDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
        pseudoClass.includes("duration-"),
      ),
      "childrenSvg:hover:drop-shadow-lg",
      "childrenSvg:focus:drop-shadow-lg",
      "childrenSvg:active:drop-shadow-lg",
    );
  }

  return pseudoClasses;
};
