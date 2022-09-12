import NextImage, { ImageProps } from "next/image";
import PropTypes from "prop-types";

const Image: React.FC<ImageProps> = ({ height, width, ...imageProps }) => {
  const props: ImageProps = {
    height,
    // (...!height && !width ? { layout: "fill" } : {}),
    ...((!height || !width) && {
      layout: "fill"
    }),
    width,
    ...imageProps
  };

  return <NextImage {...props} />;
};

Image.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

export { Image };
