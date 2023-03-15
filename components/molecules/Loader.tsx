import { Spinner } from "components/atoms/Spinner/Spinner";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const Loader: React.FC = () => (
  <LayoutContainer
    themeClasses={{
      height: "h-100%",
      position: "relative"
    }}
  >
    <LayoutContainer
      themeClasses={{
        alignItems: "items-center",
        display: "flex",
        flexFlow: "flex-row-nowrap",
        height: "h-100%",
        justifyContent: "justify-center"
      }}
    >
      <Spinner />
    </LayoutContainer>
  </LayoutContainer>
);

export { Loader };
