import React, { Fragment } from "react";

import Corner from "<atoms>/Corner";

import { CornerProps } from "<atoms>/__typings__/Corner.d.ts";
import { CornersProps } from "<molecules>/__typings__/Corners.d.ts";

const positions: CornerProps[] = [{
  position: "topLeft"
}, {
  position: "topRight"
}, {
  position: "bottomLeft"
}, {
  position: "bottomRight"
}];

const Corners = ({ isActive = false }: CornersProps): JSX.Element => (
  <Fragment>
    {positions.map(({
      position
    }: CornerProps): JSX.Element => (
      <Corner key={position} position={position} isActive={isActive} />
    ))}
  </Fragment>
);

export default Corners;