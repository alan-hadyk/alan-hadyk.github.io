import { IIconProps } from "components/atoms/@types/Icon";
import { TSpacing } from "types/props";

export interface LinkWithIconProps {
  dataCy?: string;
  dataTestId?: string;
  height?: `h-${TSpacing}`;
  href: string;
  iconName: IIconProps["iconName"];
  isExternal?: boolean;
  width?: `w-${TSpacing}`;
}
