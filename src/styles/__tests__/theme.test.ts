import theme from "styles/theme";

import breakpoints from "styles/variables/breakpoints";
import colorPalette from "styles/variables/colorPalette";
import easing from "styles/variables/easing";
import fontFamilies from "styles/variables/fontFamilies";
import fontSizes from "styles/variables/fontSizes";
import fontWeights from "styles/variables/fontWeights";
import spacing from "styles/variables/spacing";
import transitionTimes from "styles/variables/transitionTimes";
import zIndex from "styles/variables/zIndex";
import keyframes from "styles/variables/keyframes";

describe("styles / theme", () => {
  test("should have correct variables", () => {
    expect(theme).toEqual({
      breakpoints,
      colorPalette,
      easing,
      fontFamilies,
      fontSizes,
      fontWeights,
      keyframes,
      spacing,
      transitionTimes,
      zIndex
    });
  });
});
