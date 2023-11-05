import { horizontalLinksWithImagesIconDefaultThemeClasses } from "@app/components/molecules/HorizontalLinksWithImages/styles";
import { IHorizontalLinksWithImagesProps } from "@app/components/molecules/HorizontalLinksWithImages/@types/HorizontalLinksWithImages";
import { LinkWithImage } from "@app/components/molecules/LinkWithImage/LinkWithImage";

export const HorizontalLinksWithImages: React.FC<
  IHorizontalLinksWithImagesProps
> = ({ icons }) => (
  <>
    {icons.map(({ href, imageName, isExternal }) => (
      <LinkWithImage
        href={href}
        imageName={imageName}
        isExternal={isExternal}
        key={imageName}
        themeClasses={horizontalLinksWithImagesIconDefaultThemeClasses}
      />
    ))}
  </>
);
