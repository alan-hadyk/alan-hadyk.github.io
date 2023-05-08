import { IImageStaticProps } from "@app/components/atoms/ImageStatic/@types/ImageStatic";
import { imageStaticImgDefaultThemeClasses } from "@app/components/atoms/ImageStatic/styles";
import { IThemeClasses } from "@app/types/theme";

const useImageStaticThemeClasses = ({
  themeClasses,
}: Pick<IImageStaticProps, "themeClasses">) => {
  const imageStaticImgThemeClasses: IThemeClasses = {
    ...imageStaticImgDefaultThemeClasses,
    ...themeClasses,
  };

  const { height, width } = imageStaticImgThemeClasses;

  const imageStaticPictureClassNames = [height, width];

  return {
    imageStaticImgThemeClasses,
    imageStaticPictureClassNames,
  };
};

export { useImageStaticThemeClasses };
