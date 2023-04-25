import {
  Device,
  IResponsiveProps
} from "components/layout/Responsive/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { IThemeClasses } from "types/theme";
import { responsiveDefaultThemeClasses } from "components/layout/Responsive/styles";

const Responsive: React.FC<IResponsiveProps> = ({ children, devices }) => {
  const responsiveThemeClasses: IThemeClasses = {
    ...responsiveDefaultThemeClasses,
    pseudoClasses: [
      ...(devices.includes(Device.Tv) ? ["screenLg:block"] : []),
      ...(devices.includes(Device.Desktop) ? ["screenMdLg:block"] : []),
      ...(devices.includes(Device.Tablet) ? ["screenSmMd:block"] : []),
      ...(devices.includes(Device.Mobile) ? ["screenMaxSm:block"] : [])
    ]
  };

  return (
    <LayoutContainer themeClasses={responsiveThemeClasses}>
      {children}
    </LayoutContainer>
  );
};

export { Responsive };
