import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.React,
    label: "React"
  },
  {
    iconName: IconStaticName.NextJs,
    label: "Next.js"
  },
  {
    iconName: IconStaticName.React,
    label: "React Native"
  },
  {
    iconName: IconStaticName.NodeJs,
    label: "Node.js"
  },
  {
    iconName: IconStaticName.NestJs,
    label: "NestJS"
  },
  {
    iconName: IconStaticName.Prisma,
    label: "Prisma"
  },
  {
    iconName: IconStaticName.NodeJs,
    label: "Express"
  },
  {
    iconName: IconStaticName.Ember,
    label: "Ember"
  },
  {
    iconName: IconStaticName.Prestashop,
    label: "PrestaShop"
  },
  {
    iconName: IconStaticName.JQuery,
    label: "jQuery"
  },
  {
    iconName: IconStaticName.RubyOnRails,
    label: "Ruby on Rails"
  },
  {
    iconName: IconStaticName.Sinatra,
    label: "Sinatra"
  }
];

export const frameworksCategory = {
  iconsWithLabels,
  title: "Frameworks"
};
