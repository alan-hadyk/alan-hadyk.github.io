import {
  IThemeClasses,
  TSpacingValues,
  TUtilityWithArbitraryValues
} from "types/theme";

export interface IConsoleTextProps {
  themeClasses: Pick<IThemeClasses, "fontSize" | "lineHeight"> & {
    height: TUtilityWithArbitraryValues<"after:h", TSpacingValues>;
    transform: TUtilityWithArbitraryValues<
      "after:translate-y" | "after:translate-x",
      TSpacingValues
    >;
    width: TUtilityWithArbitraryValues<"after:w", TSpacingValues>;
  };
}
