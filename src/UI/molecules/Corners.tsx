import React, { Fragment } from "react";

import Corner from "UI/atoms/Corner";

import { CornerProps } from "UI/atoms/__typings__/Corner";
import { CornersProps } from "UI/molecules/__typings__/Corners";

const positions: CornerProps[] = [
  {
    position: "topLeft"
  },
  {
    position: "topRight"
  },
  {
    position: "bottomLeft"
  },
  {
    position: "bottomRight"
  }
];

const Corners = ({ isActive = false }: CornersProps): JSX.Element => (
  <Fragment>
    {positions.map(
      ({ position }: CornerProps): JSX.Element => (
        <Corner key={position} position={position} isActive={isActive} />
      )
    )}
  </Fragment>
);

export default Corners;
