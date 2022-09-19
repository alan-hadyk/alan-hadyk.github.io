import PropTypes from "prop-types";

import { ILineProps, LineDirection } from "components/atoms/@types/Line";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const Line: React.FC<ILineProps> = ({ direction, isActive = false }) => (
  <div
    className={trimTemplateLiteral(`
      line
      bg-white shadow-line
      absolute bottom-0 
      block h-1 
      transition-all duration-fast ease-in-out
      z-100

      ${isActive ? "w-50% opacity-100 visible" : "w-0 opacity-0 invisible"}
      ${direction === LineDirection.LEFT && "left-50%"}
      ${direction === LineDirection.RIGHT && "right-50%"}
    `)}
    data-cy="Line"
  />
);

Line.propTypes = {
  direction: PropTypes.oneOf([LineDirection.LEFT, LineDirection.RIGHT])
    .isRequired,
  isActive: PropTypes.bool
};

export { Line };
