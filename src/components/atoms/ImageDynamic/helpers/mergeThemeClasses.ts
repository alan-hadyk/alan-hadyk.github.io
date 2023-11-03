import { IImageDynamicProps } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { convertVariantsToStyles } from "@app/components/atoms/ImageDynamic/helpers/convertVariantsToStyles";
import { IThemeClasses } from "@app/types/theme";
import omit from "lodash/omit";

// Helper function to merge theme classes
export const mergeThemeClasses = (
  variants: IImageDynamicProps["variants"] = [],
  themeClasses: IThemeClasses | undefined,
  imageDynamicBaseThemeClasses: IThemeClasses,
): IThemeClasses => ({
  ...omit(imageDynamicBaseThemeClasses, ["animate", "transitionDuration"]),
  ...convertVariantsToStyles(variants, imageDynamicBaseThemeClasses),
  ...omit(themeClasses, ["animate", "transitionDuration"]),
});
