import { IResponsiveProps } from "components/layout/@types/Responsive";

export interface IRenderColumnsArgs {
  columnCount: `columns-${number}`;
  dataTestId: string;
  devices: IResponsiveProps["devices"];
}
