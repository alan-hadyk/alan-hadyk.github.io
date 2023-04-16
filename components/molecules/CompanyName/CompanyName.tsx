import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyNameDevices,
  CompanyNameVariant,
  ICompanyNameProps
} from "components/molecules/CompanyName/@types/CompanyName";
import { useCompanyNameThemeClasses } from "components/molecules/CompanyName/hooks/useCompanyNameThemeClasses";
import { companyTvDesktopAndTabletNameContainerDefaultThemeClasses } from "components/molecules/CompanyName/styles";

const CompanyName: React.FC<ICompanyNameProps> = ({
  children,
  devices,
  variant = CompanyNameVariant.Light
}) => {
  const {
    companyMobileNameThemeClasses,
    companyTvDesktopAndTabletNameThemeClasses
  } = useCompanyNameThemeClasses({ variant });

  return (
    <>
      {devices === CompanyNameDevices.TvDesktopAndTablet && (
        <LayoutContainer
          themeClasses={
            companyTvDesktopAndTabletNameContainerDefaultThemeClasses
          }
        >
          <Typography themeClasses={companyTvDesktopAndTabletNameThemeClasses}>
            {children}
          </Typography>
        </LayoutContainer>
      )}
      {devices === CompanyNameDevices.Mobile && (
        <Typography themeClasses={companyMobileNameThemeClasses}>
          {children}
        </Typography>
      )}
    </>
  );
};

export { CompanyName };
