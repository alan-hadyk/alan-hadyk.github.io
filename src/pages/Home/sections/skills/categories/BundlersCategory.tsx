import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandWebpack",
    label: "Webpack"
  },
  {
    iconName: "brandGrunt",
    label: "Grunt"
  },
  {
    iconName: "brandGulp",
    label: "Gulp"
  }
];

const BundlersCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="Bundlers"
  />
);

export default BundlersCategory;
