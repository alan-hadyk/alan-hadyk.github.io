import { Corner } from "components/atoms/Corner/Corner";

import { ICornerProps } from "components/atoms/Corner/@types/Corner";
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

const Corners: React.FC<ICornersProps> = ({ isActive = false, variant }) => (
  <>
    {positions.map(
      ({ position }: ICornerProps): JSX.Element => (
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
