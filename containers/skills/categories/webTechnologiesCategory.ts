import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";

export const webTechnologiesCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [IconStaticName.HTML, IconStaticName.CSS].includes(iconName)
  ),
  title: "Web Technologies"
};
