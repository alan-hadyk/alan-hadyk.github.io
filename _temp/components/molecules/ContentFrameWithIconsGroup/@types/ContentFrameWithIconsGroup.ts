import { Device } from "components/layout/Responsive/@types/Responsive";
import { IContentFrameWithIconsProps } from "components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import { IThemeClasses } from "types/theme";

export interface IContentFrameWithIconsGroupProps {
  columnCount?: `columns-${number}`;
  device?: Device;
  items: IContentFrameWithIconsProps[];
}

export interface IContentFrameWithIconsGroupThemeClasses {
  wrapper: IThemeClasses;
}
