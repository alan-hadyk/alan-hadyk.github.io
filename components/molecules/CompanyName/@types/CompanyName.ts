export enum CompanyNameDevices {
  Mobile,
  TvDesktopAndTablet
}

export interface ICompanyNameProps {
  children: string;
  devices: CompanyNameDevices;
}
