import { ITextProps } from "components/atoms/@types/Text";
import { ILayoutContainerProps } from "components/layout/@types/LayoutContainer";
import { TSpacingValues } from "types/theme";
import { TChildren } from "types/props";

export interface ISectionProps {
  children: TChildren;
  dataCy?: string;
  id: string;
  marginBottom?: ILayoutContainerProps["marginBottom"];
  minHeight?: `min-h-${TSpacingValues}`;
  title?: string;
}

export interface IRenderTitle {
  fontSize: ITextProps["fontSize"];
  marginBottom: ILayoutContainerProps["marginBottom"];
}
