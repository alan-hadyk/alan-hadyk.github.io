import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandJS",
    label: "JavaScript"
  },
  {
    iconName: "brandTS",
    label: "TypeScript"
  },
  {
    iconName: "brandCoffeeScript",
    label: "CoffeeScript"
  }
];

const LanguagesCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="Languages"
  />
);

export default LanguagesCategory;
