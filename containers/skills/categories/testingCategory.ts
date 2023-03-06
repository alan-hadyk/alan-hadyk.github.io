import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "jest",
    label: "JEST"
  },
  {
    iconName: "airbnb",
    label: "Enzyme"
  },
  {
    iconName: "reactTestingLibrary",
    label: "React Testing Library"
  },
  {
    iconName: "cypress",
    label: "Cypress"
  },
  {
    iconName: "qUnit",
    label: "QUnit"
  }
];

export const testingCategory = {
  iconsWithLabels,
  title: "Testing"
};
