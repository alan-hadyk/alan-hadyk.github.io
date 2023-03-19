import { IDashboardElementProps } from "components/molecules/DashboardElement/@types/DashboardElement";
import { IThemeClasses } from "types/theme";

const calculateChildrenHeight = ({
  description
}: Pick<IDashboardElementProps, "description">): IThemeClasses["height"] =>
  description ? "h-[calc(100%-3.6rem-2.4rem-2.8rem)]" : "h-[calc(100%-3.6rem)]";

export { calculateChildrenHeight };
