import { IImageDynamicProps } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { generatePseudoClasses } from "@app/components/atoms/ImageDynamic/helpers/generatePseudoClasses";
import { imageDynamicDefaultThemeClasses } from "@app/components/atoms/ImageDynamic/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IThemeClasses, TPseudoClasses } from "@app/types/theme";
import omit from "lodash/omit";

const useImageDynamicThemeClasses = ({
  themeClasses,
  variants = [],
}: Pick<IImageDynamicProps, "themeClasses" | "variants">) => {
  const imageDynamicBaseThemeClasses: IThemeClasses = {
    ...imageDynamicDefaultThemeClasses,
    ...themeClasses,
  };

  const imageDynamicThemeClasses: IImageDynamicProps["themeClasses"] = {
    ...omit(imageDynamicBaseThemeClasses, "pseudoClasses"),
    pseudoClasses: generatePseudoClasses(
      variants,
      imageDynamicBaseThemeClasses,
    ) as TPseudoClasses,
  };

  const imageDynamicWrapperClassNames = convertObjectValuesToString(
    imageDynamicThemeClasses,
  );

  const imageComponentClassNames =
    imageDynamicBaseThemeClasses?.pseudoClasses?.find((pseudoClass) =>
      pseudoClass.includes("fill-"),
    ) || "";

  return {
    imageComponentClassNames,
    imageDynamicWrapperClassNames,
  };
};

export { useImageDynamicThemeClasses };
