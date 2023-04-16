export enum CompanyNameDevices {
  Mobile,
  TvDesktopAndTablet
}

export enum CompanyNameVariant {
  Dark,
  Light
}

export interface ICompanyNameProps {
  children: string;
  devices: CompanyNameDevices;
  variant?: CompanyNameVariant;
}
