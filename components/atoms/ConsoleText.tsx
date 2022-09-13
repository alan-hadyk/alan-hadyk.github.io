/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from "prop-types";

import { IConsoleTextProps } from "components/atoms/@types/ConsoleText";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";
import { spacingPropType } from "helpers/propTypes/spacing";
import { fontSizePropType } from "helpers/propTypes/fontSize";

const HERO_DESCRIPTION =
  "Vision driven change agent with career-long record of front-end user strategy and UI development";

const ConsoleText: React.FC<IConsoleTextProps> = ({
  dataTestId,
  fontSize,
  height,
  lineHeight,
  transform,
  width
}) => (
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
  height: spacingPropType("after:h"),
  lineHeight: spacingPropType("leading"),
  transform: (
    props: React.ComponentProps<React.JSXElementConstructor<any>>,
    propName: string,
    componentName: string
  ) => {
    const value = props[propName];
    const regex = new RegExp("^after:translate-(x|y)-\\[.*\\]$", "i");

    if (value && !regex.test(value)) {
      return new Error(
        `Invalid prop ${propName} with value ${value} supplied to ${componentName}`
      );
    }

    return null;
  },
  width: spacingPropType("after:w")
};

export { ConsoleText, HERO_DESCRIPTION as hero };
