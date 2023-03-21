import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.Vite,
    label: "Vite"
  },
  {
    iconName: IconStaticName.Webpack,
    label: "Webpack"
  },
  {
    iconName: IconStaticName.Grunt,
    label: "Grunt"
  },
  {
    iconName: IconStaticName.Gulp,
    label: "Gulp"
  }
];

export const bundlersCategory = {
  iconsWithLabels,
  title: "Bundlers"
};
