import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
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
  },
  {
    iconName: "brandBasecamp",
    label: "Basecamp"
  }
];

export const taskManagementCategory = {
  iconsWithLabels,
  title: "Task Management"
};
