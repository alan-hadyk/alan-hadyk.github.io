import { IImageDynamicProps } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { mergeThemeClasses } from "@app/components/atoms/ImageDynamic/helpers/mergeThemeClasses";
import { imageDynamicDefaultThemeClasses } from "@app/components/atoms/ImageDynamic/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses } from "@app/types/theme";

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

  const imageDynamicThemeClasses = mergeThemeClasses(
    variants,
    themeClasses,
    imageDynamicBaseThemeClasses,
  );

  const imageDynamicClassNames = convertObjectValuesToString(
    imageDynamicThemeClasses,
  );

  return {
    imageDynamicClassNames,
  };
};

export { useImageDynamicThemeClasses };
