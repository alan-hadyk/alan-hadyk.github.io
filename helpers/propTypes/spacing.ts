import PropTypes from "prop-types";
import tailwindConfig from "tailwind.config";

const theme = tailwindConfig.theme;

type spacing = `${keyof typeof theme.spacing}`;

const spacingPropTypes = (prefix: string) =>
  PropTypes.oneOf(
    Object.keys(theme.spacing).map(
      (value) => `${prefix}-${value}`
    ) as Array<`${never}-${spacing}`>
  );

export { spacingPropTypes };
