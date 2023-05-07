import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { HexagonFill } from "components/molecules/Hexagon/@types/Hexagon";
import { Hexagon } from "components/molecules/Hexagon/Hexagon";
import {
  timelineDefaultThemeClasses,
  timelineHexagonContainerDefaultThemeClasses,
  timelineLineDefaultThemeClasses
} from "components/molecules/Timeline/styles";

const Timeline: React.FC = () => (
  <LayoutContainer themeClasses={timelineDefaultThemeClasses}>
    <LayoutContainer themeClasses={timelineHexagonContainerDefaultThemeClasses}>
      <Hexagon fill={HexagonFill.Solid} />
    </LayoutContainer>
    <LayoutContainer themeClasses={timelineLineDefaultThemeClasses} />
  </LayoutContainer>
);

export { Timeline };
