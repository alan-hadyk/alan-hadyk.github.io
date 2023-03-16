import { IMapSizeToButtonTextProps } from "components/molecules/ButtonText/@types/ButtonText";
import { IThemeClasses } from "types/theme";

export const mapSizeToButtonTextProps: IMapSizeToButtonTextProps = {
  large: { fontSize: "text-28" },
  medium: { fontSize: "text-24" },
  small: { fontSize: "text-20" }
};

export const buttonTextTypographyDefaultThemeClasses: IThemeClasses = {
  color: "text-white",
  fontFamily: "font-exan",
  textTransform: "lowercase"
};
