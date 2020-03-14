import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import TypingAnimation from "<molecules>/TypingAnimation";

const Code = (): JSX.Element => (
  <DashboardElement
    dataTestId="Code"
    flex="1 1 25%"
    childrenHeight="spacing184"
    title="Code" 
  >
    <TypingAnimation />
  </DashboardElement>
);
  
export default memo(Code);
