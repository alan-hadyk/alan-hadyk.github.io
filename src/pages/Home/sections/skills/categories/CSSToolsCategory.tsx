import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandStyledComponents",
    label: "styled components"
  },
  {
    iconName: "brandSass",
    label: "Sass"
  },
  {
    iconName: "brandCSSModules",
    label: "CSS Modules"
  },
  {
    iconName: "brandLESS",
    label: "LESS"
  }
];

const CSSToolsCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="CSS tools"
  />
);

export default CSSToolsCategory;
