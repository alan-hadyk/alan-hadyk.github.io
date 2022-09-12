import PropTypes from "prop-types";

import { IConsoleTextProps } from "components/atoms/@types/ConsoleText";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";
import { spacingPropTypes } from "helpers/propTypes/spacing";
import { fontSizePropType } from "helpers/propTypes/fontSize";

const HERO_DESCRIPTION =
  "Vision driven change agent with career-long record of front-end user strategy and UI development";

const ConsoleText = ({
  dataTestId,
  fontSize,
  height,
  lineHeight,
  transform,
  width
}: IConsoleTextProps): JSX.Element => (
  <div
    className={trimTemplateLiteral(`
      text-white font-exan ${fontSize} ${lineHeight}
      text-center lowercase
    
      msHighContrastNone:font-anonymousPro msHighContrastNone:uppercase
      msHighContrastActive:font-anonymousPro msHighContrastActive:uppercase

      after:animate-blink-slow
      after:bg-blue100
      after:content-['']
      after:inline-block
      ${height} ${width}
      after:ml-8
      ${transform}
    `)}
    data-testid={dataTestId || "ConsoleText"}
  >
    {HERO_DESCRIPTION}
  </div>
);

ConsoleText.propTypes = {
  dataTestId: PropTypes.string,
  fontSize: fontSizePropType,
  height: spacingPropTypes("h"),
  lineHeight: spacingPropTypes("leading"),
  transform: PropTypes.string.isRequired,
  width: spacingPropTypes("w")
};

export { ConsoleText, HERO_DESCRIPTION as hero };
