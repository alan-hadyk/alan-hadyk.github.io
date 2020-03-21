import React, { memo, Fragment } from "react";

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

function Corners({ isActive = false }: CornersProps): JSX.Element {
  return (
    <Fragment>
      {renderCorners()}
    </Fragment>
  );

  function renderCorners(): JSX.Element[] {
    return positions.map(({
      position
    }: CornerProps): JSX.Element => (
      <Corner key={position} position={position} isActive={isActive} />
    ));
  }
}

export default memo(Corners);