import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "javaScript",
    label: "JavaScript"
  },
  {
    iconName: "typeScript",
    label: "TypeScript"
  },
  {
    iconName: "coffeeScript",
    label: "CoffeeScript"
  },
  {
    iconName: "ruby",
    label: "Ruby"
  }
];

export const languagesCategory = {
  iconsWithLabels,
  title: "Languages"
};
