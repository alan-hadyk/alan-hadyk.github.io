/* eslint-disable @typescript-eslint/no-explicit-any */
import tailwindConfig from "tailwind.config";

const theme = tailwindConfig.theme;

type colors = `${keyof typeof theme.colors}`;

const colorPropType =
  (prefix: string) =>
  (
    props: React.ComponentProps<React.JSXElementConstructor<any>>,
    propName: string,
    componentName: string
  ) => {
    const propValue = props[propName];

    const colorValuesArray = Object.keys(theme.colors).map(
      (value) => `${prefix}-${value}`
    ) as Array<`${never}-${colors}`>;
    if (propValue && !colorValuesArray.includes(propValue as never)) {
      return new Error(
        `Invalid prop ${propName} with value ${propValue} supplied to ${componentName}`
      );
    }

    return null;
  };

export { colorPropType };
