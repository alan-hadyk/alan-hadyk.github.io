import { IDashboardInnerContainerProps } from "components/molecules/DashboardInnerContainer/@types/DashboardInnerContainer";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { dashboardInnerContainerChildrenWrapperDefaultThemeClasses } from "components/molecules/DashboardInnerContainer/styles";
import { useDashboardInnerContainerThemeClasses } from "components/molecules/DashboardInnerContainer/hooks/useDashboardInnerContainerThemeClasses";

const DashboardInnerContainer: React.FC<IDashboardInnerContainerProps> = ({
  children,
  themeClasses
}) => {
  const { dashboardInnerContainerThemeClasses } =
    useDashboardInnerContainerThemeClasses({ themeClasses });

  return (
    <LayoutContainer themeClasses={dashboardInnerContainerThemeClasses}>
      <LayoutContainer
        themeClasses={dashboardInnerContainerChildrenWrapperDefaultThemeClasses}
      >
        {children}
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { DashboardInnerContainer };
