import PropTypes from "prop-types";
import tailwindConfig from "tailwind.config";

const theme = tailwindConfig.theme;

const zIndexPropTypes = PropTypes.oneOf(
  Object.keys(theme.zIndex).map(
    (value) => `z-${Number(value)}`
  ) as Array<`${never}-${keyof typeof theme.zIndex}`>
);

export { zIndexPropTypes };
