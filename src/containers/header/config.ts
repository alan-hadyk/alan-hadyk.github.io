import { ImageDynamicName } from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";
import { IHorizontalLinksWithImagesProps } from "@app/components/molecules/HorizontalLinksWithImages/@types/HorizontalLinksWithImages";
import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

export const navItems: INavProps["navItems"] = [
  {
    href: "#experience",
    title: "Experience",
  },
  {
    href: "#skills",
    title: "Skills",
  },
  {
    href: "#about-me",
    title: "About me",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

export const icons: IHorizontalLinksWithImagesProps["icons"] = [
  {
    href: "https://github.com/alan-hadyk",
    imageName: ImageDynamicName.GitHub,
    isExternal: true,
  },
  {
    href: "https://www.toptal.com/resume/alan-hadyk",
    imageName: ImageDynamicName.Toptal,
    isExternal: true,
  },
  {
    href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
    imageName: ImageDynamicName.LinkedIn,
    isExternal: true,
  },
];
