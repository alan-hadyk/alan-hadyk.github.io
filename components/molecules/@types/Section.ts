import { ITextProps } from "components/atoms/@types/Text";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TChildren, TSpacing } from "types/props";

export interface ISectionProps {
  children: TChildren;
  dataCy?: string;
  id: string;
  marginBottom?: ILayoutContainerProps["marginBottom"];
  minHeight?: `min-h-${TSpacing}`;
  title?: string;
}

export interface IRenderTitle {
  fontSize: ITextProps["fontSize"];
  marginBottom: ILayoutContainerProps["marginBottom"];
}
