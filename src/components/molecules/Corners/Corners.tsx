import { Corner } from "@app/components/atoms/Corner/Corner";

import { ICornersProps } from "@app/components/molecules/Corners/@types/Corners";
import { cornersPositions } from "@app/components/molecules/Corners/config";

export const Corners: React.FC<ICornersProps> = ({ isActive = false }) => (
  <>
    {cornersPositions.map(
      ({ position }): JSX.Element => (
        <Corner key={position} position={position} isActive={isActive} />
      ),
    )}
  </>
);
