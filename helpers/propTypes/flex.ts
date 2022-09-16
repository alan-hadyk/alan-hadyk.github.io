/* eslint-disable @typescript-eslint/no-explicit-any */

const flexPropType = (
  props: React.ComponentProps<React.JSXElementConstructor<any>>,
  propName: string,
  componentName: string
) => {
  const regex = /^flex-\[\d_\d_((\d*)|(\d*\.\d*))(%|rem)\]$/g;

  if (props[propName] && !regex.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} with value ${props[propName]} supplied to ${componentName}`
    );
  }

  return null;
};

export { flexPropType };
