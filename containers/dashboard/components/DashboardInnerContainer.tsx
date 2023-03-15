import { IDashboardInnerContainerProps } from "containers/dashboard/components/@types/DashboardInnerContainer";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const DashboardInnerContainer: React.FC<IDashboardInnerContainerProps> = ({
  children,
  height,
  marginBottom = "mb-0",
  marginTop = "mt-0"
}) => (
  <LayoutContainer
    themeClasses={{
      height,
      marginBottom,
      marginTop,
      width: "w-100%"
    }}
  >
    <LayoutContainer
      themeClasses={{
        alignItems: "items-stretch",
        display: "flex",
        flexFlow: "flex-row-nowrap",
        height: "h-100%",
        justifyContent: "justify-center",
        pseudoClasses: ["directChildren:ml-48", "firstdirectChild:ml-0"]
      }}
    >
      {children}
    </LayoutContainer>
  </LayoutContainer>
);

export { DashboardInnerContainer };
