import React, { Fragment } from "react";

import DashboardSectionInnerContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";

import Commits from "<pages>/Home/sections/dashboard/elements/Commits";
import Ip from "<pages>/Home/sections/dashboard/elements/Ip";
import UserAgent from "<pages>/Home/sections/dashboard/elements/UserAgent";
import PoweredBy from "<pages>/Home/sections/dashboard/elements/PoweredBy";

import Responsive from "<layout>/Responsive";

import spacing from "<styles>/variables/spacing";

import {
  DevicesProps
} from "<layout>/__typings__/Responsive.d.ts";

const DashboardSectionBottom = ({
  devices
}: DevicesProps): JSX.Element => (
  <Responsive
    dataTestId="DashboardSectionBottom"
    devices={devices}
    width="100%"
  >
    <DashboardSectionInnerContainer
      height={`calc(22.6vh + ${spacing.spacing36})`}
    >
      <Commits />
      <PoweredBy />

      {(devices.includes("desktop") || devices.includes("tv")) && (
        <Fragment>
          <UserAgent />
          <Ip />
        </Fragment>
      )}
    </DashboardSectionInnerContainer>
  </Responsive>
);

export default DashboardSectionBottom;
