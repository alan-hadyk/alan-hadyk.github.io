import { ILinkWithImageProps } from "@app/components/molecules/LinkWithImage/@types/LinkWithImage";

export interface IHorizontalLinksWithImagesProps {
  icons: Pick<ILinkWithImageProps, "href" | "imageName" | "isExternal">[];
}
