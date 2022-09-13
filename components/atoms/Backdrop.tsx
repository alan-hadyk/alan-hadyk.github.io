import PropTypes from "prop-types";

import { IBackdropProps } from "components/atoms/@types/Backdrop";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const Backdrop: React.FC<IBackdropProps> = ({ onClick }) => (
  <div
    className={trimTemplateLiteral(`
      bottom-0 left-0 right-0 top-0 fixed
      cursor-pointer
      z-900
    `)}
    data-testid="Backdrop"
    onClick={onClick}
  />
);

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired
};

export { Backdrop };
