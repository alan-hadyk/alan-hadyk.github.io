import { Spinner } from "components/atoms/Spinner/Spinner";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  loaderDefaultThemeClasses,
  loaderSpinnerWrapperDefaultThemeClasses
} from "components/molecules/Loader/styles";

const Loader: React.FC = () => (
  <LayoutContainer themeClasses={loaderDefaultThemeClasses}>
    <LayoutContainer themeClasses={loaderSpinnerWrapperDefaultThemeClasses}>
      <Spinner />
    </LayoutContainer>
  </LayoutContainer>
);

export { Loader };
