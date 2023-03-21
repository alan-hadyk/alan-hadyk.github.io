import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.JavaScript,
    label: "JavaScript"
  },
  {
    iconName: IconStaticName.TypeScript,
    label: "TypeScript"
  },
  {
    iconName: IconStaticName.CoffeeScript,
    label: "CoffeeScript"
  },
  {
    iconName: IconStaticName.Ruby,
    label: "Ruby"
  }
];

export const languagesCategory = {
  iconsWithLabels,
  title: "Languages"
};
