import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { FlowChart } from "components/molecules/FlowChart";

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
    <FlowChart />
  </ContentFrame>
);

export { Flux };
