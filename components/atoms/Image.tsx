import { IImageProps } from "components/atoms/@types/Image";

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

export { Image };
