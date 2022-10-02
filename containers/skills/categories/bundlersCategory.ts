import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "brandVite",
    label: "Vite"
  },
  {
    iconName: "brandWebpack",
    label: "Webpack"
  },
  {
    iconName: "brandGrunt",
    label: "Grunt"
  },
  {
    iconName: "brandGulp",
    label: "Gulp"
  }
];

export const bundlersCategory = {
  iconsWithLabels,
  title: "Bundlers"
};
