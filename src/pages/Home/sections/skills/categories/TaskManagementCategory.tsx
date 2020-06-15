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
    iconName: "brandAirbnb",
    label: "Phabricator"
  },
  {
    iconName: "brandRedmine",
    label: "Redmine"
  },
  {
    iconName: "brandCypress",
    label: "Quire"
  },
  {
    iconName: "brandTrello",
    label: "Trello"
  },
  {
    iconName: "brandQunit",
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
