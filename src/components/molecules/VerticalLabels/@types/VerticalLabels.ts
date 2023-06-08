import { ILinkProps } from "@app/components/molecules/Link/@types/Link";
import { IThemeClasses } from "@app/types/theme";

interface IVerticalLabel {
  href?: ILinkProps["href"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
}

export enum VerticalLabelsSize {
  ExtraSmall,
  Large,
  Medium,
  Small,
}

export enum VerticalLabelsVariant {
  Blue,
  Dark,
  White,
}

export interface IVerticalLabelsProps {
  labels: IVerticalLabel[];
  size?: VerticalLabelsSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "color">;
  };
  variant?: VerticalLabelsVariant;
}
