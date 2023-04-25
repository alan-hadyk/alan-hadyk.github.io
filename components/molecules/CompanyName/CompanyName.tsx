import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  CompanyNameFormat,
  CompanyNameSize,
  CompanyNameVariant,
  ICompanyNameProps
} from "components/molecules/CompanyName/@types/CompanyName";
import { useCompanyNameThemeClasses } from "components/molecules/CompanyName/hooks/useCompanyNameThemeClasses";

const CompanyName: React.FC<ICompanyNameProps> = ({
  children,
  format,
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
      {[CompanyNameFormat.TvDesktopAndTablet, CompanyNameFormat.Pdf].includes(
        format
      ) && (
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
