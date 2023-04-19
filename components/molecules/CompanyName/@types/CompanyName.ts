export enum CompanyNameDevices {
  Mobile,
  TvDesktopAndTablet
}

export enum CompanyNameVariant {
  Dark,
  Light
}

export enum CompanyNameSize {
  Medium,
  Large
}

export interface ICompanyNameProps {
  children: string;
  devices: CompanyNameDevices;
  size?: CompanyNameSize;
  variant?: CompanyNameVariant;
}
