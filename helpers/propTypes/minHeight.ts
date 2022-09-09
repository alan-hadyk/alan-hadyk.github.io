import PropTypes from "prop-types";
import tailwindConfig from "tailwind.config";

const theme = tailwindConfig.theme;

type spacing = `${keyof typeof theme.spacing}`;

const minHeightPropType = PropTypes.oneOf(
  Object.keys(theme.spacing).map(
    (value) => `min-h-${value}`
  ) as Array<`${never}-${spacing}`>
);

export { minHeightPropType };
