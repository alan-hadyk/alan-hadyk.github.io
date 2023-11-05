import { ILinkProps } from "@app/components/molecules/Link/@types/Link";
import { IIconStaticProps } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelContentProps } from "@app/components/molecules/IconWithLabelContent/@types/IconWithLabelContent";

export enum IconWithLabelSize {
  ExtraSmall,
  Large,
  Medium,
  Small,
}

export enum IconWithLabelVariant {
  LightBlue,
  DarkBlue,
  White,
}

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconStaticProps["iconName"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
  size?: IconWithLabelSize;
  themeClasses?: {
    content?: IIconWithLabelContentProps["themeClasses"];
  };
  variant?: IconWithLabelVariant;
}
