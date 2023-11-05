import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { IContentFrameWithIconsProps } from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";

export interface IContentFrameWithIconsItemsProps {
  device?: Device;
  items: IContentFrameWithIconsProps[];
}
