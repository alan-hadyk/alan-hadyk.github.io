import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.Jira,
    label: "JIRA"
  },
  {
    iconName: IconStaticName.Phabricator,
    label: "Phabricator"
  },
  {
    iconName: IconStaticName.Redmine,
    label: "Redmine"
  },
  {
    iconName: IconStaticName.Quire,
    label: "Quire"
  },
  {
    iconName: IconStaticName.Trello,
    label: "Trello"
  },
  {
    iconName: IconStaticName.Taskade,
    label: "Taskade"
  },
  {
    iconName: IconStaticName.Basecamp,
    label: "Basecamp"
  }
];

export const taskManagementCategory = {
  iconsWithLabels,
  title: "Task Management"
};
