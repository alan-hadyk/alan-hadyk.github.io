import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";

export interface IDashboardElementProps
  extends Pick<
    ILayoutContainerProps,
    "alignSelf" | "children" | "flex" | "order"
  > {
  dataCy?: string;
  description?: string;
  overflow?: "overflow-visible" | "overflow-hidden";
  shouldDisplayBorder?: boolean;
  shouldDisplayCorners?: boolean;
  title?: string;
  titleFontSize?: "text-16" | "text-28";
  titleOverflow?: "overflow-visible" | "overflow-hidden";
}
