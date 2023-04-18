import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";

export const webApisCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.Axios,
      IconStaticName.GraphQL,
      IconStaticName.REST,
      IconStaticName.Websocket
    ].includes(iconName)
  ),
  title: "Web APIs"
};
