import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "brandJS",
    label: "JavaScript"
  },
  {
    iconName: "brandTS",
    label: "TypeScript"
  },
  {
    iconName: "brandCoffeeScript",
    label: "CoffeeScript"
  },
  {
    iconName: "brandRuby",
    label: "Ruby"
  }
];

export const languagesCategory = {
  iconsWithLabels,
  title: "Languages"
};
