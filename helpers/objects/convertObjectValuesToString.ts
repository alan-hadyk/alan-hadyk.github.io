/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertObjectValuesToString = (
  object: Record<string, any>
): string => {
  const array: string[] = [];

  Object.values(object).forEach((value) =>
    Array.isArray(value) ? array.push(...value) : array.push(value)
  );

  return array.join(" ");
};
