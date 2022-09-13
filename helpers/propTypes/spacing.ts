/* eslint-disable @typescript-eslint/no-explicit-any */
import tailwindConfig from "tailwind.config";

const theme = tailwindConfig.theme;

type spacing = `${keyof typeof theme.spacing}`;

const spacingPropType =
  (prefix: string) =>
  (
    props: React.ComponentProps<React.JSXElementConstructor<any>>,
    propName: string,
    componentName: string
  ) => {
    const propValue = props[propName];

    const regexArbitraryTailwindValue = new RegExp(`^${prefix}-\\[.*\\]$`, "i");
    const regexDirectPercentageValue = /^((\d*)|(\d*\.\d*))%$/gi;

    const percentageValueCheck =
      propValue && !propValue.includes(`${prefix}-`)
        ? regexDirectPercentageValue.test(propValue)
        : false;

    const spacingValuesArray = Object.keys(theme.spacing).map(
      (value) => `${prefix}-${value}`
    ) as Array<`${never}-${spacing}`>;
    if (
      propValue &&
      !regexArbitraryTailwindValue.test(propValue) &&
      !percentageValueCheck &&
      !spacingValuesArray.includes(propValue as never)
    ) {
      return new Error(
        `Invalid prop ${propName} with value ${propValue} supplied to ${componentName}`
      );
    }

    return null;
  };

export { spacingPropType };
