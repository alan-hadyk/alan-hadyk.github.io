import React, { memo, Fragment } from "react";

import DashboardSectionInnerContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Code from "<pages>/Home/sections/dashboard/elements/Code";
import Responsive from "<layout>/Responsive";

import spacing from "<styles>/variables/spacing";

import {
  DeviceProps
} from "<layout>/__typings__/Responsive.d.ts";

const DashboardSectionTop = (devices: DeviceProps["device"][]): JSX.Element => (
  <Responsive devices={devices} width="100%">
    <DashboardSectionInnerContainer
      height={`calc(17vh + ${spacing.spacing36})`}
    >
      <TechStack />

      {devices.includes("desktop") && (
        <Fragment>
          <Flux />
          <Code />
        </Fragment>
      )}

      {devices.includes("tablet") && (
        <Fragment>
          <Flux />
        </Fragment>
      )}
    </DashboardSectionInnerContainer>
  </Responsive>
)

export default memo(DashboardSectionTop);
