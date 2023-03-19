import { IImageStaticProps } from "components/atoms/ImageStatic/@types/ImageStatic";
import { imageStaticImgDefaultThemeClasses } from "components/atoms/ImageStatic/styles";
import { convertObjectValuesToString } from "helpers/objects/convertObjectValuesToString";
import { CSSProperties } from "react";
import { IThemeClasses } from "types/theme";

const ImageStatic: React.FC<IImageStaticProps> = ({
  alt,
  id,
  src,
  themeClasses
}) => {
  const imageStaticImgBaseThemeClasses: IThemeClasses = {
    ...imageStaticImgDefaultThemeClasses,
    ...themeClasses
  };

  const { height, width, ...imageStaticImgOtherBaseThemeClasses } =
    imageStaticImgBaseThemeClasses;

  const imageStaticImgThemeClasses: IThemeClasses =
    imageStaticImgOtherBaseThemeClasses;
  const pictureClassNames = [];
  const inlineStyles: CSSProperties = {};

  if (height) {
    if (height.includes("h-")) {
      pictureClassNames.push(height);
      imageStaticImgThemeClasses.height = height;
    } else {
      inlineStyles.height = height;
    }
  }

  if (width) {
    if (width.includes("w-")) {
      pictureClassNames.push(width);
      imageStaticImgThemeClasses.width = width;
    } else {
      inlineStyles.width = width;
    }
  }

  return (
    <picture className={pictureClassNames.join(" ")} style={inlineStyles}>
      <img
        alt={alt}
        className={convertObjectValuesToString(imageStaticImgThemeClasses)}
        id={id}
        src={src}
        style={inlineStyles}
      />
    </picture>
  );
};

export { ImageStatic };
