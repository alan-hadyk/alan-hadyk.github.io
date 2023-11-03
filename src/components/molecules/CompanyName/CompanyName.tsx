import { Typography } from "@app/components/atoms/Typography/Typography";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyNameFormat,
  ICompanyNameProps,
} from "@app/components/molecules/CompanyName/@types/CompanyName";
import { useCompanyNameThemeClasses } from "@app/components/molecules/CompanyName/hooks/useCompanyNameThemeClasses";

const CompanyName: React.FC<ICompanyNameProps> = ({ children, format }) => {
  const {
    companyMobileNameThemeClasses,
    companyTvDesktopAndTabletNameContainerThemeClasses,
    companyTvDesktopAndTabletNameThemeClasses,
  } = useCompanyNameThemeClasses();

  return (
    <>
      {format === CompanyNameFormat.TvDesktopAndTablet && (
        <LayoutContainer
          themeClasses={companyTvDesktopAndTabletNameContainerThemeClasses}
        >
          <Typography themeClasses={companyTvDesktopAndTabletNameThemeClasses}>
            {children}
          </Typography>
        </LayoutContainer>
      )}
      {format === CompanyNameFormat.Mobile && (
        <Typography themeClasses={companyMobileNameThemeClasses}>
          {children}
        </Typography>
      )}
    </>
  );
};

export { CompanyName };
