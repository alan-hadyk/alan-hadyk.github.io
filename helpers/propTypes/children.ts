import PropTypes from "prop-types";

const childrenPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.string
]);

export { childrenPropTypes };
