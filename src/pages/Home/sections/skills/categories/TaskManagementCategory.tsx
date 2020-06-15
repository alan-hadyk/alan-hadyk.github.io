import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandJIRA",
    label: "JIRA"
  },
  {
    iconName: "brandPhabricator",
    label: "Phabricator"
  },
  {
    iconName: "brandRedmine",
    label: "Redmine"
  },
  {
    iconName: "brandQuire",
    label: "Quire"
  },
  {
    iconName: "brandTrello",
    label: "Trello"
  },
  {
    iconName: "brandTaskade",
    label: "Taskade"
  }
];

const TaskManagementCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="Task management"
  />
);

export default TaskManagementCategory;
