import { Corner } from "components/atoms/Corner";

import { ICornerProps } from "components/atoms/@types/Corner";
import { ICornersProps } from "components/molecules/@types/Corners";

const positions: ICornerProps[] = [
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

const Corners: React.FC<ICornersProps> = ({ isActive = false }) => (
  <>
    {positions.map(
      ({ position }: ICornerProps): JSX.Element => (
        <Corner key={position} position={position} isActive={isActive} />
      )
    )}
  </>
);

export { Corners };
