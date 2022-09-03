import PropTypes from "prop-types";

import { Device, IResponsiveProps } from "components/layout/@types/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { spacingPropTypes } from "helpers/propTypes/spacing";

const Responsive: React.FC<IResponsiveProps> = ({
  children,
  dataTestId,
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
    data-testid={dataTestId || "Responsive"}
    height={height}
    width={width}
  >
    {children}
  </LayoutContainer>
);

Responsive.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  dataTestId: PropTypes.string,
  devices: PropTypes.arrayOf(
    PropTypes.oneOf([Device.TV, Device.DESKTOP, Device.TABLET, Device.MOBILE])
      .isRequired
  ).isRequired,
  height: spacingPropTypes("h"),
  width: spacingPropTypes("w")
};

export { Responsive };
