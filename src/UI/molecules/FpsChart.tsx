import React, { memo, Fragment } from "react";

import PositionContainer from "<layout>/PositionContainer";

const FpsChart = (): JSX.Element => (
  <PositionContainer
  >
    <Fragment>
      FPS
    </Fragment>
  </PositionContainer>
);
  
export default memo(FpsChart);
