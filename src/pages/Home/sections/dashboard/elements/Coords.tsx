import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import Sonar from "<molecules>/Sonar";

import spacing from "<styles>/variables/spacing";

const Coords = (): JSX.Element => (
  <DashboardElement
    childrenHeight={`calc(${Math.round((184 / 1080) * 100)}vh - ${spacing.spacing36})`}
    dataTestId="Coords"
    flex="0 1 15%"
    shuffleDelay={600}
    title="Coords" 
  >
    <Sonar />
  </DashboardElement>
);
  
export default memo(Coords);
