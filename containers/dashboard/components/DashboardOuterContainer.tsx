import { IDashboardOuterContainerProps } from "containers/dashboard/components/@types/DashboardOuterContainer";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { childrenPropTypes } from "helpers/propTypes/children";

const DashboardOuterContainer: React.FC<IDashboardOuterContainerProps> = ({
  children
}) => (
  <LayoutContainer height="h-100vh" paddingTop="pt-96">
    <LayoutContainer height="h-100%" position="relative">
      <LayoutContainer
        alignItems="items-center"
        className="flex-col flex-nowrap"
        height="h-100%"
        justifyContent="justify-between"
      >
        {children}
      </LayoutContainer>
    </LayoutContainer>
  </LayoutContainer>
);

DashboardOuterContainer.propTypes = {
  children: childrenPropTypes.isRequired
};

export { DashboardOuterContainer };
