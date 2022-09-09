/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const orderPropType = (
  props: React.ComponentProps<React.JSXElementConstructor<any>>,
  propName: string,
  componentName: string
) => {
  const regex = /^order-(0|[1-9][0-9]?|100)$/g;
  const propValue = props[propName];
  const order = ["order-first", "order-last", "order-none"];

  if (!regex.test(propValue) && !order.includes(propValue)) {
    return new Error(
      `Invalid prop ${propName} with value ${propValue} supplied to ${componentName}`
    );
  }

  return null;
};

export { orderPropType };
