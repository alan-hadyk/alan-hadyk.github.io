import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export interface IOutstandingVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "href" | "iconName" | "label">[];
  themeClasses?: IThemeClasses;
}
