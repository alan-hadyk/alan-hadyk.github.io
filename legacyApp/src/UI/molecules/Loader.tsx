import Spinner from "UI/atoms/Spinner";
import FlexContainer from "UI/layout/FlexContainer";
import PositionContainer from "UI/layout/PositionContainer";

const Loader = (): JSX.Element => (
  <PositionContainer dataTestId="Loader" height="100%" position="relative">
    <FlexContainer
      alignItems="center"
      flexFlow="row nowrap"
      height="100%"
      justifyContent="center"
    >
      <Spinner data-testid="Spinner" />
    </FlexContainer>
  </PositionContainer>
);

export default Loader;
