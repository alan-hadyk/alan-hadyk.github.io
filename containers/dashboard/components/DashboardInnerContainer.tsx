import { IDashboardInnerContainerProps } from "containers/dashboard/components/@types/DashboardInnerContainer";
import { LayoutContainer } from "components/layout/LayoutContainer";

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
      className="directChildren:ml-48 firstdirectChild:ml-0"
      display="flex"
      flexFlow="flex-row flex-nowrap"
      height="h-100%"
      justifyContent="justify-center"
    >
      {children}
    </LayoutContainer>
  </LayoutContainer>
);

export { DashboardInnerContainer };
