import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "jira",
    label: "JIRA"
  },
  {
    iconName: "phabricator",
    label: "Phabricator"
  },
  {
    iconName: "redmine",
    label: "Redmine"
  },
  {
    iconName: "quire",
    label: "Quire"
  },
  {
    iconName: "trello",
    label: "Trello"
  },
  {
    iconName: "taskade",
    label: "Taskade"
  },
  {
    iconName: "basecamp",
    label: "Basecamp"
  }
];

export const taskManagementCategory = {
  iconsWithLabels,
  title: "Task Management"
};
