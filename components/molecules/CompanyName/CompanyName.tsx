import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyNameDevices,
  CompanyNameSize,
  CompanyNameVariant,
  ICompanyNameProps
} from "components/molecules/CompanyName/@types/CompanyName";
import { useCompanyNameThemeClasses } from "components/molecules/CompanyName/hooks/useCompanyNameThemeClasses";

const CompanyName: React.FC<ICompanyNameProps> = ({
  children,
  devices,
  size = CompanyNameSize.Large,
  variant = CompanyNameVariant.Light
}) => {
  const {
    companyMobileNameThemeClasses,
    companyTvDesktopAndTabletNameContainerThemeClasses,
    companyTvDesktopAndTabletNameThemeClasses
  } = useCompanyNameThemeClasses({ size, variant });

  return (
    <>
      {devices === CompanyNameDevices.TvDesktopAndTablet && (
        <LayoutContainer
          themeClasses={companyTvDesktopAndTabletNameContainerThemeClasses}
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
