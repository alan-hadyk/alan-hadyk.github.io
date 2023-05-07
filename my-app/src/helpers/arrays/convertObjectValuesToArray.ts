import isString from "lodash/isString";
import flatMap from "lodash/flatMap";

export const convertObjectValuesToArray = (
  object: Record<string, unknown>
): string[] =>
  flatMap(object, (value) =>
    Array.isArray(value)
      ? convertObjectValuesToArray(Object.fromEntries(value.entries()))
      : value
  ).filter(isString);
