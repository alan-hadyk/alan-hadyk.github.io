import { Device, IResponsiveProps } from "components/layout/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { TPseudoClasses } from "types/theme";

const Responsive: React.FC<IResponsiveProps> = ({
  children,
  devices,
  height = "h-auto",
  width = "w-auto"
}) => (
  <LayoutContainer
    themeClasses={{
      display: "hidden",
      height,
      pseudoClasses: [
        ...(devices.includes(Device.TV) ? ["screenLg:block"] : []),
        ...(devices.includes(Device.DESKTOP) ? ["screenMdLg:block"] : []),
        ...(devices.includes(Device.TABLET) ? ["screenSmMd:block"] : []),
        ...(devices.includes(Device.MOBILE) ? ["screenMaxSm:block"] : [])
      ] as TPseudoClasses,
      width
    }}
  >
    {children}
  </LayoutContainer>
);

export { Responsive };
