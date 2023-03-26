import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export interface ICompanyDescriptionIconWithLabelProps {
  href?: IIconWithLabelProps["href"];
  iconName: IIconWithLabelProps["iconName"];
  label: IIconWithLabelProps["label"];
  themeClasses?: Pick<IThemeClasses, "marginBottom" | "marginTop">;
}
