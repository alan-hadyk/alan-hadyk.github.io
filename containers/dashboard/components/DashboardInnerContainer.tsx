import { IDashboardInnerContainerProps } from "containers/dashboard/components/@types/DashboardInnerContainer";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { childrenPropTypes } from "helpers/propTypes/children";
import { spacingPropTypes } from "helpers/propTypes/spacing";

const DashboardInnerContainer: React.FC<IDashboardInnerContainerProps> = ({
  children,
  height,
  marginBottom = "mb-0",
  marginTop = "mt-0"
}) => (
  <LayoutContainer
    height={height}
    marginBottom={marginBottom}
    marginTop={marginTop}
    width="w-100%"
  >
    <LayoutContainer
      alignItems="items-stretch"
      className="flex-row flex-nowrap directChildren:ml-48 firstdirectChild:ml-0"
      height="h-100%"
      justifyContent="justify-center"
    >
      {children}
    </LayoutContainer>
  </LayoutContainer>
);

DashboardInnerContainer.propTypes = {
  children: childrenPropTypes.isRequired,
  height: spacingPropTypes("h"),
  marginBottom: spacingPropTypes("mb"),
  marginTop: spacingPropTypes("mt")
};

export { DashboardInnerContainer };
