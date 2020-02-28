import React, { Fragment, memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";

const Coords = (): JSX.Element => (
  <DashboardElement 
    title="Coords" 
  >
    <Fragment>
      Coords
    </Fragment>
  </DashboardElement>
);
  
export default memo(Coords);
