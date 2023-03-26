import { ICompanyProps } from "components/organisms/Company/@types/Company";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { CompanyTvDesktopAndTablet } from "components/organisms/Company/screens/CompanyTvDesktopAndTablet";
import { CompanyMobile } from "components/organisms/Company/screens/CompanyMobile";

const Company: React.FC<ICompanyProps> = ({
  date,
  iconsWithLabels,
  link,
  name,
  responsibilities,
  themeClasses,
  title
}) => (
  <LayoutContainer>
    <LayoutContainer themeClasses={{ position: "relative", width: "w-100%" }}>
      {[CompanyTvDesktopAndTablet, CompanyMobile].map(
        (CompanyScreenComponent, index) => (
          <CompanyScreenComponent
            date={date}
            iconsWithLabels={iconsWithLabels}
            link={link}
            key={index}
            name={name}
            responsibilities={responsibilities}
            themeClasses={themeClasses}
            title={title}
          />
        )
      )}
    </LayoutContainer>
  </LayoutContainer>
);

export { Company };
