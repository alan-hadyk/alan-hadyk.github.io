import PropTypes from "prop-types";

import { IImageProps } from "components/atoms/@types/Image";
import { spacingPropType } from "helpers/propTypes/spacing";

const Image: React.FC<IImageProps> = ({
  alt,
  className,
  height,
  id,
  src,
  width
}) => (
  <picture
    className={`
      ${height?.includes("h-") ? height : ""} 
      ${width?.includes("w-") ? width : ""} 
    `}
    style={{
      height: !height?.includes("h-") ? height : undefined,
      width: !width?.includes("w-") ? width : undefined
    }}
  >
    <img
      alt={alt}
      className={`w-auto h-100% ${className || ""}`}
      id={id}
      src={src}
    />
  </picture>
);

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: spacingPropType("h"),
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: spacingPropType("w")
};

export { Image };
