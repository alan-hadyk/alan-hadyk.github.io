/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const flexPropType = (
  props: React.ComponentProps<React.JSXElementConstructor<any>>,
  propName: string,
  componentName: string
) => {
  const regex = /^flex-\[\d_\d_(0|[1-9][0-9]?|100)%\]$/g;

  if (!regex.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} with value ${props[propName]} supplied to ${componentName}`
    );
  }

  return null;
};

export { flexPropType };
