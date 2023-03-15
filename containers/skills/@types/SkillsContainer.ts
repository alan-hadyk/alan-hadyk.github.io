import { IResponsiveProps } from "components/layout/Responsive/@types/Responsive";

export interface IRenderColumnsArgs {
  columnCount: `columns-${number}`;
  devices: IResponsiveProps["devices"];
}
