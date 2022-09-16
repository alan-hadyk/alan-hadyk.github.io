import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "brandJEST",
    label: "JEST"
  },
  {
    iconName: "brandAirbnb",
    label: "Enzyme"
  },
  {
    iconName: "brandTestingLibrary",
    label: "React Testing Library"
  },
  {
    iconName: "brandCypress",
    label: "Cypress"
  },
  {
    iconName: "brandQunit",
    label: "QUnit"
  }
];

export const testingCategory = {
  iconsWithLabels,
  title: "Testing"
};
