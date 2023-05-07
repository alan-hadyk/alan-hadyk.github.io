import { Corner } from "components/atoms/Corner/Corner";

import { ICornersProps } from "components/molecules/Corners/@types/Corners";
import { cornersPositions } from "components/molecules/Corners/config";

const Corners: React.FC<ICornersProps> = ({ isActive = false, variant }) => (
  <>
    {cornersPositions.map(
      ({ position }): JSX.Element => (
        <Corner
          key={position}
          position={position}
          isActive={isActive}
          variant={variant}
        />
      )
    )}
  </>
);

export { Corners };
