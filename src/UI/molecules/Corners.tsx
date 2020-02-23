import React, { memo, Fragment } from "react";

import Corner, { CornerProps } from "<atoms>/Corner";

const positions: CornerProps[] = [{
  position: "topLeft"
}, {
  position: "topRight"
}, {
  position: "bottomLeft"
}, {
  position: "bottomRight"
}];

export interface CornersProps {
  isActive?: boolean;
}

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