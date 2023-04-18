import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";

export const stateManagementCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.ReactQuery,
      IconStaticName.Apollo,
      IconStaticName.Redux
    ].includes(iconName)
  ),
  title: "State Management"
};
