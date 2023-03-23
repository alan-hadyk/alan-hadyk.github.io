import { IDashboardOuterContainerProps } from "components/molecules/DashboardOuterContainer/@types/DashboardOuterContainer";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  dashboardOuterContainerChildrenInnerWrapperDefaultThemeClasses,
  dashboardOuterContainerChildrenOuterWrapperDefaultThemeClasses,
  dashboardOuterContainerDefaultThemeClasses
} from "components/molecules/DashboardOuterContainer/styles";

const DashboardOuterContainer: React.FC<IDashboardOuterContainerProps> = ({
  children
}) => (
  <LayoutContainer themeClasses={dashboardOuterContainerDefaultThemeClasses}>
    <LayoutContainer
      themeClasses={
        dashboardOuterContainerChildrenOuterWrapperDefaultThemeClasses
      }
    >
      <LayoutContainer
        themeClasses={
          dashboardOuterContainerChildrenInnerWrapperDefaultThemeClasses
        }
      >
        {children}
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

export { DashboardOuterContainer };
