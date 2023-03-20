import { IContentFrameProps } from "components/molecules/ContentFrame/@types/ContentFrame";
import { IThemeClasses } from "types/theme";

export const skillsItemDefaultThemeClasses: IContentFrameProps["themeClasses"] =
  {
    container: {
      flex: "flex-[1_1_100%]"
    },
    title: {
      fontSize: "text-28"
    }
  };

export const skillsItemIconsWrapperDefaultThemeClasses: IThemeClasses = {
  padding: "p-32"
};
