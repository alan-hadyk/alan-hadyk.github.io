import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";

export const bundlersCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.Vite,
      IconStaticName.Webpack,
      IconStaticName.Grunt,
      IconStaticName.Gulp
    ].includes(iconName)
  ),
  title: "Bundlers"
};
