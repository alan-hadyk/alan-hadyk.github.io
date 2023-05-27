import { IImageDynamicProps } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { convertVariantsToStyles } from "@app/components/atoms/ImageDynamic/helpers/convertVariantsToStyles";
import { imageDynamicDefaultThemeClasses } from "@app/components/atoms/ImageDynamic/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";
import omit from "lodash/omit";

const useImageDynamicThemeClasses = ({
  themeClasses,
  variants = [],
}: Pick<IImageDynamicProps, "themeClasses" | "variants">) => {
  const imageDynamicBaseThemeClasses: IThemeClasses = {
    ...imageDynamicDefaultThemeClasses,
    animate: themeClasses?.animate ?? imageDynamicDefaultThemeClasses.animate,
    transitionDuration:
      themeClasses?.transitionDuration ??
      imageDynamicDefaultThemeClasses.transitionDuration,
  };

  const imageDynamicThemeClasses: IImageDynamicProps["themeClasses"] = {
    ...omit(imageDynamicBaseThemeClasses, ["animate", "transitionDuration"]),
    ...convertVariantsToStyles(variants, imageDynamicBaseThemeClasses),
    ...omit(themeClasses, ["animate", "transitionDuration"]),
  };

  const imageDynamicClassNames = convertObjectValuesToString(
    imageDynamicThemeClasses,
  );

  return {
    imageDynamicClassNames,
  };
};

export { useImageDynamicThemeClasses };
