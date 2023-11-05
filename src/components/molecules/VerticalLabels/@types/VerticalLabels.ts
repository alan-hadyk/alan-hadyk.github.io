import { ILinkProps } from "@app/components/molecules/Link/@types/Link";
import { IThemeClasses } from "@app/types/theme";

interface IVerticalLabel {
  href?: ILinkProps["href"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
}

export interface IVerticalLabelsProps {
  labels: IVerticalLabel[];
  themeClasses?: {
    label?: Pick<IThemeClasses, "color">;
  };
}
