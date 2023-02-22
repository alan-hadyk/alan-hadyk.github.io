import { IThemeClasses } from "types/theme";

export const convertObjectValuesToArray = (
  object: Record<string, string | string[]> | IThemeClasses
): string[] => Object.values(object).flat();
