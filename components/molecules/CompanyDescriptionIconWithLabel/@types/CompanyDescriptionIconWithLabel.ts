import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export enum CompanyDescriptionIconWithLabelVariant {
  Blue,
  Dark
}

export interface ICompanyDescriptionIconWithLabelProps {
  href?: IIconWithLabelProps["href"];
  iconName: IIconWithLabelProps["iconName"];
  label: IIconWithLabelProps["label"];
  size?: IIconWithLabelProps["size"];
  themeClasses?: Pick<IThemeClasses, "marginBottom" | "marginTop">;
  variant?: CompanyDescriptionIconWithLabelVariant;
}
