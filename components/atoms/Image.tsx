import NextImage, { ImageProps } from "next/image";
import PropTypes from "prop-types";

const Image: React.FC<ImageProps> = ({ height, width, ...imageProps }) => {
  const props: ImageProps = {
    layout: "fill",
    ...imageProps
  };

  return (
    <div
      className="relative"
      style={{
        height,
        width
      }}
    >
      <NextImage {...props} />
    </div>
  );
};

Image.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export { Image };
