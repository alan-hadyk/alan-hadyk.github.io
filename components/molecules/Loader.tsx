import { Spinner } from "components/atoms/Spinner/Spinner";
import { LayoutContainer } from "components/layout/LayoutContainer";

const Loader: React.FC = () => (
  <LayoutContainer height="h-100%" position="relative">
    <LayoutContainer
      alignItems="items-center"
      display="flex"
      flexFlow="flex-row flex-nowrap"
      height="h-100%"
      justifyContent="justify-center"
    >
      <Spinner />
    </LayoutContainer>
  </LayoutContainer>
);

export { Loader };
