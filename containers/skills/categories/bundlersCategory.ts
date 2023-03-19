import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "vite",
    label: "Vite"
  },
  {
    iconName: "webpack",
    label: "Webpack"
  },
  {
    iconName: "grunt",
    label: "Grunt"
  },
  {
    iconName: "gulp",
    label: "Gulp"
  }
];

export const bundlersCategory = {
  iconsWithLabels,
  title: "Bundlers"
};
