import { IResponsiveProps } from "components/layout/Responsive/@types/Responsive";

export interface IRenderColumnsArgs {
  columnCount: `columns-${number}`;
  devices: IResponsiveProps["devices"];
}

export enum SkillsContainerFormat {
  Pdf,
  Web
}
export interface ISkillsContainerProps {
  format?: SkillsContainerFormat;
}
