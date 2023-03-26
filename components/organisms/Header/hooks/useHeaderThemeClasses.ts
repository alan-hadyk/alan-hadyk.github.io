import { IHeaderProps } from "components/organisms/Header/@types/Header";
import { headerContainerDefaultThemeClasses } from "components/organisms/Header/styles";
import { IThemeClasses } from "types/theme";

export const useHeaderThemeClasses = ({
  themeClasses
}: Pick<IHeaderProps, "themeClasses">) => {
  const headerContainerThemeClasses: IThemeClasses = {
    ...headerContainerDefaultThemeClasses,
    ...themeClasses?.wrapper
  };

  return {
    headerContainerThemeClasses
  };
};
