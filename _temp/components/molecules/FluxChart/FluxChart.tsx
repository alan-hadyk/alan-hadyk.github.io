import { ImageStatic } from "components/atoms/ImageStatic/ImageStatic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  fluxChartDefaultThemeClasses,
  fluxChartImageContainerDefaultThemeClasses,
  fluxChartImageDefaultThemeClasses
} from "components/molecules/FluxChart/styles";

const FluxChart: React.FC = () => (
  <LayoutContainer themeClasses={fluxChartDefaultThemeClasses}>
    <LayoutContainer themeClasses={fluxChartImageContainerDefaultThemeClasses}>
      <ImageStatic
        alt="Flux architecture"
        themeClasses={fluxChartImageDefaultThemeClasses}
        src="/images/static/flux.svg"
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { FluxChart };
