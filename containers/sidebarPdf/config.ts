import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IVerticalIconsWithLabelsProps } from "components/molecules/VerticalIconsWithLabels/@types/VerticalIconsWithLabels";

export const mainIconsWithLabels: IVerticalIconsWithLabelsProps["iconsWithLabels"] =
  [
    {
      iconName: IconStaticName.Pin,
      label: "Mysłowice, Poland"
    },
    {
      href: "mailto:alan.hadyk@gmail.com",
      iconName: IconStaticName.Envelope,
      isExternal: true,
      label: "alan.hadyk@gmail.com"
    },
    {
      href: "https://alanhadyk.dev/",
      iconName: IconStaticName.Globe,
      isExternal: true,
      label: "alanhadyk.dev"
    },
    {
      href: "https://github.com/alan-hadyk",
      iconName: IconStaticName.GitHub,
      isExternal: true,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/alan-hadyk-78738099/",
      iconName: IconStaticName.LinkedIn,
      isExternal: true,
      label: "LinkedIn"
    }
  ];
