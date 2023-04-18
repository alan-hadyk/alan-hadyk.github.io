import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";

export const languagesCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.JavaScript,
      IconStaticName.TypeScript,
      IconStaticName.CoffeeScript,
      IconStaticName.Ruby
    ].includes(iconName)
  ),
  title: "Languages"
};
