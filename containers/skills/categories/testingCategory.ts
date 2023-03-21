import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.JEST,
    label: "JEST"
  },
  {
    iconName: IconStaticName.AirBnb,
    label: "Enzyme"
  },
  {
    iconName: IconStaticName.ReactTestingLibrary,
    label: "React Testing Library"
  },
  {
    iconName: IconStaticName.Cypress,
    label: "Cypress"
  },
  {
    iconName: IconStaticName.QUnit,
    label: "QUnit"
  }
];

export const testingCategory = {
  iconsWithLabels,
  title: "Testing"
};
