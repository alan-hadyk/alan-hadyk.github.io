import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import TypingAnimation from "<molecules>/TypingAnimation";

import spacing from "<styles>/variables/spacing";

const Code = (): JSX.Element => (
  <DashboardElement
    childrenHeight={`calc(${Math.round((184 / 1080) * 100)}vh - ${spacing.spacing36})`}
    dataTestId="Code"
    flex="0 1 25%"
    shuffleDelay={1800}
    title="Code" 
  >
    <TypingAnimation />
  </DashboardElement>
);
  
export default memo(Code);
