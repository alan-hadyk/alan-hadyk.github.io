export enum CompanyNameFormat {
  Mobile,
  TvDesktopAndTablet,
}

export interface ICompanyNameProps {
  children: string;
  format: CompanyNameFormat;
}
