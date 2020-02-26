import spacing from "<styles>/variables/spacing";
import zIndex from "<styles>/variables/zIndex";

type SpacingKeys = keyof typeof spacing;
type ZIndexKeys = keyof typeof zIndex;

export interface PositionContainerProps {
  bottom?: typeof spacing[SpacingKeys] | "unset";
  children: JSX.Element | JSX.Element[];
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  left?: typeof spacing[SpacingKeys] | "unset";
  position?: "static" | "relative" | "fixed" | "sticky";
  right?: typeof spacing[SpacingKeys] | "unset";
  top?: typeof spacing[SpacingKeys] | "unset";
  zIndex?: typeof zIndex[ZIndexKeys];
}
