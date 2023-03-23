import { IDashboardInnerContainerProps } from "components/molecules/DashboardInnerContainer/@types/DashboardInnerContainer";
import { dashboardInnerContainerDefaultThemeClasses } from "components/molecules/DashboardInnerContainer/styles";
import { IThemeClasses } from "types/theme";

const useDashboardInnerContainerThemeClasses = ({
  themeClasses
}: Pick<IDashboardInnerContainerProps, "themeClasses">) => {
  const dashboardInnerContainerThemeClasses: IThemeClasses = {
    ...dashboardInnerContainerDefaultThemeClasses,
    ...themeClasses
  };

  return {
    dashboardInnerContainerThemeClasses
  };
};

export { useDashboardInnerContainerThemeClasses };
