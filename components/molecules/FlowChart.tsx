import { Image } from "components/atoms/Image";
import { LayoutContainer } from "components/layout/LayoutContainer";

const FlowChart = (): JSX.Element => (
  <LayoutContainer
    alignItems="items-center"
    height="h-100%"
    justifyContent="justify-center"
  >
    <LayoutContainer height="h-100%" padding="p-8" width="w-100%">
      <Image
        alt="Flow chart"
        className="block h-100% mx-auto my-0 w-100%"
        id="flow-chart"
        layout="fill"
        src="/images/svg/Flux-FlowChart.svg"
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { FlowChart };
