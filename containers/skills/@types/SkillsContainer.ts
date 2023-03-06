import { IResponsiveProps } from "components/layout/@types/Responsive";

export interface IRenderColumnsArgs {
  columnCount: `columns-${number}`;
  devices: IResponsiveProps["devices"];
}
