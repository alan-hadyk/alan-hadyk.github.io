import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";

export const cssToolsCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.WindiCSS,
      IconStaticName.StyledComponents,
      IconStaticName.Tailwind,
      IconStaticName.Chakra,
      IconStaticName.Sass,
      IconStaticName.CSSModules,
      IconStaticName.LESS
    ].includes(iconName)
  ),
  title: "CSS Tools"
};
