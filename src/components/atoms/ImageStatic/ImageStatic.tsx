import { IImageStaticProps } from "@app/components/atoms/ImageStatic/@types/ImageStatic";
import { useImageStaticThemeClasses } from "@app/components/atoms/ImageStatic/hooks/useImageStaticThemeClasses";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const ImageStatic: React.FC<IImageStaticProps> = ({
  alt,
  id,
  src,
  style,
  themeClasses,
}) => {
  const { imageStaticImgThemeClasses, imageStaticPictureClassNames } =
    useImageStaticThemeClasses({ themeClasses });

  return (
    <picture className={imageStaticPictureClassNames.join(" ")} style={style}>
      <img
        alt={alt}
        className={convertObjectValuesToString(imageStaticImgThemeClasses)}
        id={id}
        src={src}
        style={style}
      />
    </picture>
  );
};

export { ImageStatic };
