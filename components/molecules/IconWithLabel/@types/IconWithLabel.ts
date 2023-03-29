import { ILinkProps } from "components/molecules/Link/@types/Link";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelContentProps } from "components/molecules/IconWithLabelContent/@types/IconWithLabelContent";

export enum IconWithLabelSize {
  ExtraSmall,
  Large,
  Medium,
  Small
}

export enum IconWithLabelVariant {
  Blue,
  White
}

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconStaticProps["iconName"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
  size?: IconWithLabelSize;
  themeClasses?: {
    iconWithLabelContent?: IIconWithLabelContentProps["themeClasses"];
  };
  variant?: IconWithLabelVariant;
}
