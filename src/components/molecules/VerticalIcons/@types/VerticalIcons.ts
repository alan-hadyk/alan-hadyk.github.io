import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";

export enum VerticalIconsSize {
  ExtraSmall,
  Large,
  Medium,
  Small,
}

export interface IVerticalIconsProps {
  icons: IconStaticName[];
  size?: VerticalIconsSize;
}
