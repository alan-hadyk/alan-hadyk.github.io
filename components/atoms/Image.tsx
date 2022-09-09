import NextImage, { ImageProps } from "next/image";

const Image: React.FC<ImageProps> = (imageProps) => (
  <NextImage className="block" {...imageProps} />
);

export { Image };
