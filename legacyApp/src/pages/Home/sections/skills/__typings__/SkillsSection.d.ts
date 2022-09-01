import { ResponsiveProps } from "UI/layout/__typings__/Responsive";

export interface RenderColumnsArgs {
  columnCount: number;
  dataTestId: string;
  devices: ResponsiveProps["devices"];
}
