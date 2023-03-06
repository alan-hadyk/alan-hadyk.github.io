import { IIconDynamicProps } from "components/atoms/IconDynamic/@types/IconDynamic";
import { TSpacingValues } from "types/theme";

export interface ILinkWithIconProps {
  height?: `h-${TSpacingValues}`;
  href: string;
  iconName: IIconDynamicProps["iconName"];
  isExternal?: boolean;
  width?: `w-${TSpacingValues}`;
}
