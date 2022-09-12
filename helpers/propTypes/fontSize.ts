/* eslint-disable @typescript-eslint/no-explicit-any */
import tailwindConfig from "tailwind.config";

const theme = tailwindConfig.theme;

type fontSize = `${keyof typeof theme.fontSize}`;

function fontSizePropType(
  props: React.ComponentProps<React.JSXElementConstructor<any>>,
  propName: string,
  componentName: string
) {
  const value = props[propName];
  const regex = new RegExp("^text-\\[.*\\]$", "i");

  const fontSizeValuesArray = Object.keys(theme.fontSize).map(
    (value) => `text-${value}`
  ) as Array<`${never}-${fontSize}`>;

  if (
    value &&
    !regex.test(value) &&
    !fontSizeValuesArray.includes(value as never)
  ) {
    return new Error(
      `Invalid prop ${propName} with value ${value} supplied to ${componentName}`
    );
  }

  return null;
}

export { fontSizePropType };
