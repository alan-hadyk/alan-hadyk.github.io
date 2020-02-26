import zIndex from "<styles>/variables/zIndex";

type ZIndexKeys = keyof typeof zIndex;

export interface HeaderProps {
  zIndex?: typeof zIndex[ZIndexKeys];
}
