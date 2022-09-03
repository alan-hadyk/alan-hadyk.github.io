export const convertObjectValuesToString = (
  object: Record<string, any>
): string => Object.values(object).join(" ");
