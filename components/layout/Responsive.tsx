import { Device, IResponsiveProps } from "components/layout/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer";

const Responsive: React.FC<IResponsiveProps> = ({
  children,
  devices,
  height = "h-auto",
  width = "w-auto"
}) => (
  <LayoutContainer
    className={`
      hidden 
      ${devices.includes(Device.TV) && "screenLg:block"}
      ${devices.includes(Device.DESKTOP) && "screenMdLg:block"}
      ${devices.includes(Device.TABLET) && "screenSmMd:block"}
      ${devices.includes(Device.MOBILE) && "screenMaxSm:block"}
    `}
    height={height}
    width={width}
  >
    {children}
  </LayoutContainer>
);

export { Responsive };
