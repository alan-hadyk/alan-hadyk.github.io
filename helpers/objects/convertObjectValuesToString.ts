/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertObjectValuesToString = (
  object: Record<string, any>
): string => Object.values(object).join(" ");
