import { ISideMenuProps } from "components/organisms/SideMenu/@types/SideMenu";
import { sideMenuOuterContainerDefaultThemeClasses } from "components/organisms/SideMenu/styles";
import { IThemeClasses } from "types/theme";

export const useSideMenuThemeClasses = ({
  isExpanded
}: Pick<ISideMenuProps, "isExpanded">) => {
  const sideMenuOuterContainerThemeClasses: IThemeClasses = {
    ...sideMenuOuterContainerDefaultThemeClasses,
    translate: isExpanded ? "translate-x-0" : "translate-x-full"
  };

  return {
    sideMenuOuterContainerThemeClasses
  };
};
