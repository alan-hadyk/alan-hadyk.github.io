import { ICompanyProps } from "@app/components/organisms/Company/@types/Company";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { CompanyTvDesktopAndTablet } from "@app/components/organisms/Company/screens/CompanyTvDesktopAndTablet";
import { CompanyMobile } from "@app/components/organisms/Company/screens/CompanyMobile";

export const Company: React.FC<ICompanyProps> = ({
  date,
  link,
  name,
  position,
  projects,
  themeClasses,
}) => {
  const companyProps: ICompanyProps = {
    date,
    link,
    name,
    position,
    projects,
    themeClasses,
  };

  return (
    <LayoutContainer id={name.replaceAll(" ", "")}>
      <LayoutContainer themeClasses={{ position: "relative", width: "w-100%" }}>
        {[CompanyTvDesktopAndTablet, CompanyMobile].map(
          (CompanyScreenComponent, index) => (
            <CompanyScreenComponent key={index} {...companyProps} />
          ),
        )}
      </LayoutContainer>
    </LayoutContainer>
  );
};
