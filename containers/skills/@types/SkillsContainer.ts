import { IResponsiveProps } from "components/layout/@types/Responsive";

export interface IRenderColumnsArgs {
  columnCount: `columns-${number}`;
  dataCy: string;
  devices: IResponsiveProps["devices"];
}
