export const convertObjectValuesToString = (
  object: Record<string, unknown>
): string => {
  const array: string[] = [];

  Object.values(object).forEach((value) =>
    Array.isArray(value) ? array.push(...value) : array.push(String(value))
  );

  return array.join(" ");
};
