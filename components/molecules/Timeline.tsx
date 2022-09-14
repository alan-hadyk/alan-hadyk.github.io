import { LayoutContainer } from "components/layout/LayoutContainer";
import { Hexagon } from "components/molecules/Hexagon";

const Timeline = (): JSX.Element => (
  <LayoutContainer height="h-100%" position="relative" width="w-16">
    <LayoutContainer
      height="h-16"
      left="left-0"
      position="absolute"
      top="top-0"
      width="w-16"
    >
      <Hexagon fill="solid" />
    </LayoutContainer>
    <LayoutContainer
      bottom="bottom-0"
      className={`
      bg-blue300
        translate-x-negative50%
      `}
      left="left-50%"
      position="absolute"
      top="top-0"
      width="w-2"
    />
  </LayoutContainer>
);

export { Timeline };
