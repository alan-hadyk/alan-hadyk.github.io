import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyNameDevices,
  ICompanyNameProps
} from "components/molecules/CompanyName/@types/CompanyName";
import {
  companyMobileNameDefaultThemeClasses,
  companyTvDesktopAndTabletNameContainerDefaultThemeClasses,
  companyTvDesktopAndTabletNameDefaultThemeClasses
} from "components/molecules/CompanyName/styles";

const CompanyName: React.FC<ICompanyNameProps> = ({ children, devices }) => (
  <>
    {devices === CompanyNameDevices.TvDesktopAndTablet && (
      <LayoutContainer
        themeClasses={companyTvDesktopAndTabletNameContainerDefaultThemeClasses}
      >
        <Typography
          themeClasses={companyTvDesktopAndTabletNameDefaultThemeClasses}
        >
          {children}
        </Typography>
      </LayoutContainer>
    )}
    {devices === CompanyNameDevices.Mobile && (
      <Typography themeClasses={companyMobileNameDefaultThemeClasses}>
        {children}
      </Typography>
    )}
  </>
);

export { CompanyName };
