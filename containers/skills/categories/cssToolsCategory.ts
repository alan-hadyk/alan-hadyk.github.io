import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.WindiCSS,
    label: "Windi CSS"
  },
  {
    iconName: IconStaticName.StyledComponents,
    label: "styled components"
  },
  {
    iconName: IconStaticName.Tailwind,
    label: "Tailwind"
  },
  {
    iconName: IconStaticName.Chakra,
    label: "Chakra"
  },
  {
    iconName: IconStaticName.Sass,
    label: "Sass"
  },
  {
    iconName: IconStaticName.CSSModules,
    label: "CSS Modules"
  },
  {
    iconName: IconStaticName.LESS,
    label: "LESS"
  }
];

export const cssToolsCategory = {
  iconsWithLabels,
  title: "CSS Tools"
};
