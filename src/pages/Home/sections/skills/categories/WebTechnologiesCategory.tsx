import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandHTML",
    label: "HTML"
  },
  {
    iconName: "brandCSS",
    label: "CSS"
  }
];

const WebTechnologiesCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="Web Technologies"
  />
);

export default WebTechnologiesCategory;
