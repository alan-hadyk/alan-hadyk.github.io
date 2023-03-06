import { IImageDynamicProps } from "components/atoms/ImageDynamic/@types/ImageDynamic";
import { TSpacingValues } from "types/theme";

export interface ILinkWithImageProps {
  height?: `h-${TSpacingValues}`;
  href: string;
  iconName: IImageDynamicProps["imageName"];
  isExternal?: boolean;
  width?: `w-${TSpacingValues}`;
}
