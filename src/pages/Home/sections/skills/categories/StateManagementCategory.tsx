import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandApollo",
    label: "Apollo"
  },
  {
    iconName: "brandRedux",
    label: "Redux"
  }
];

const StateManagementCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="State management"
  />
);

export default StateManagementCategory;
