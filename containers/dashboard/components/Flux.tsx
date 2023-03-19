import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { FluxChart } from "components/molecules/FluxChart/FluxChart";

const Flux: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="Flux"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]"
      }
    }}
  >
    <FluxChart />
  </ContentFrame>
);

export { Flux };
