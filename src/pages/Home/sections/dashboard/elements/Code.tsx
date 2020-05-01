import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import TypingAnimation from "<molecules>/TypingAnimation";

const Code = (): JSX.Element => (
  <DashboardElement
    dataTestId="Code"
    flex="0 1 25%"
    title="Code" 
  >
    <TypingAnimation />
  </DashboardElement>
);
  
export default Code;
