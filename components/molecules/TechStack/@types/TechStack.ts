import { IIconsWithLabelsProps } from "components/molecules/IconsWithLabels/@types/IconsWithLabels";

export enum TechStackVariant {
  Blue,
  Dark
}

export interface ITechStackProps {
  iconsWithLabels: IIconsWithLabelsProps["iconsWithLabels"];
  variant?: TechStackVariant;
}
