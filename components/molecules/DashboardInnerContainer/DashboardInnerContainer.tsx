import { IDashboardInnerContainerProps } from "components/molecules/DashboardInnerContainer/@types/DashboardInnerContainer";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const DashboardInnerContainer: React.FC<IDashboardInnerContainerProps> = ({
  children,
  themeClasses
}) => (
  <LayoutContainer
    themeClasses={{
      marginBottom: "mb-0",
      marginTop: "mt-0",
      width: "w-100%",
      ...themeClasses
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
