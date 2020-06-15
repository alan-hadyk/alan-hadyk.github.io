import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandReact",
    label: "React"
  },
  {
    iconName: "brandReact",
    label: "React Native"
  },
  {
    iconName: "brandNode",
    label: "Node.js"
  },
  {
    iconName: "brandNode",
    label: "Express"
  },
  {
    iconName: "brandEmber",
    label: "Ember"
  },
  {
    iconName: "brandPrestaShop",
    label: "PrestaShop"
  },
  {
    iconName: "brandJQuery",
    label: "jQuery"
  }
];

const FrameworksCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="Frameworks"
  />
);

export default FrameworksCategory;
