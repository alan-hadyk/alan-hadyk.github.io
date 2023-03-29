import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";

export const frameworksCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.React,
      IconStaticName.NextJs,
      IconStaticName.ReactNative,
      IconStaticName.NodeJs,
      IconStaticName.NestJs,
      IconStaticName.Prisma,
      IconStaticName.NodeJs,
      IconStaticName.Ember,
      IconStaticName.Prestashop,
      IconStaticName.JQuery,
      IconStaticName.RubyOnRails,
      IconStaticName.Sinatra
    ].includes(iconName)
  ),
  title: "Frameworks"
};
