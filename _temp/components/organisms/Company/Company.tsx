import {
  CompanyFormat,
  CompanyVariant,
  ICompanyProps
} from "components/organisms/Company/@types/Company";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { CompanyTvDesktopAndTablet } from "components/organisms/Company/screens/CompanyTvDesktopAndTablet";
import { CompanyMobile } from "components/organisms/Company/screens/CompanyMobile";
import { CompanyPdf } from "components/organisms/Company/screens/CompanyPdf";

const Company: React.FC<ICompanyProps> = ({
  date,
  format = CompanyFormat.Web,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title,
  variant = CompanyVariant.Blue
}) => {
  const commonCompanyProps: ICompanyProps = {
    date,
    iconsWithLabels,
    link,
    name,
    responsibilities,
    themeClasses,
    title,
    variant
  };

  return (
    <LayoutContainer>
      <LayoutContainer themeClasses={{ position: "relative", width: "w-100%" }}>
        {format === CompanyFormat.Pdf && <CompanyPdf {...commonCompanyProps} />}

        {format === CompanyFormat.Web &&
          [CompanyTvDesktopAndTablet, CompanyMobile].map(
            (CompanyScreenComponent, index) => (
              <CompanyScreenComponent key={index} {...commonCompanyProps} />
            )
          )}
      </LayoutContainer>
    </LayoutContainer>
  );
};

export { Company };
