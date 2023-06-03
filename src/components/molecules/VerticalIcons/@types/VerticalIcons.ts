import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";

export enum VerticalIconSize {
  ExtraSmall,
  Large,
  Medium,
  Small,
}

export interface IVerticalIconsProps {
  icons: IconStaticName[];
  size?: VerticalIconSize;
}
