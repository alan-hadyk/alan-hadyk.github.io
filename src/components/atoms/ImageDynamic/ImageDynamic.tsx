import {
  IImageDynamicProps,
  SVGImage,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { imageDynamicComponents } from "@app/components/atoms/ImageDynamic/config";
import { useImageDynamicThemeClasses } from "@app/components/atoms/ImageDynamic/hooks/useImageDynamicThemeClasses";

const ImageDynamic: React.FC<IImageDynamicProps> = ({
  imageName,
  style,
  themeClasses,
  variants = [],
}) => {
  const { imageDynamicClassNames } = useImageDynamicThemeClasses({
    themeClasses,
    variants,
  });

  const ImageComponent: SVGImage = imageDynamicComponents[imageName];

  return <ImageComponent className={imageDynamicClassNames} style={style} />;
};

export { ImageDynamic };
