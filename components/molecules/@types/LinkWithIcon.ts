import { IIconProps } from "components/atoms/@types/Icon";
import { TSpacingValues } from "types/theme";

export interface ILinkWithIconProps {
  height?: `h-${TSpacingValues}`;
  href: string;
  iconName: IIconProps["iconName"];
  isExternal?: boolean;
  width?: `w-${TSpacingValues}`;
}
