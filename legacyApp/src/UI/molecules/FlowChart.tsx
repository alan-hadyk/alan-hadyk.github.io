import styled from "styled-components";

import Image from "UI/atoms/Image";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

const FlowChartIcon = styled(Image)`
  display: block;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`;

const FlowChart = (): JSX.Element => (
  <FlexContainer
    alignItems="center"
    dataTestId="FlowChart"
    height="100%"
    justifyContent="center"
  >
    <SpacingContainer
      dataTestId="FlowChartSpacingContainer"
      height="100%"
      paddingBottom="spacing8"
      paddingLeft="spacing8"
      paddingRight="spacing8"
      paddingTop="spacing8"
      width="100%"
    >
      <FlowChartIcon id="flow-chart" src="/images/svg/Flux-FlowChart.svg" />
    </SpacingContainer>
  </FlexContainer>
);

export default FlowChart;
