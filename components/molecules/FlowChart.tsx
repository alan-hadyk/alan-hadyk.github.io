import { ImageStatic } from "components/atoms/ImageStatic/ImageStatic";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

const FlowChart: React.FC = () => (
  <LayoutContainer
    themeClasses={{
      alignItems: "items-center",
      display: "flex",
      height: "h-100%",
      justifyContent: "justify-center"
    }}
  >
    <LayoutContainer
      themeClasses={{
        height: "h-100%",
        padding: "p-8",
        width: "w-100%"
      }}
    >
      <ImageStatic
        alt="Flow chart"
        id="flow-chart"
        themeClasses={{
          display: "block",
          height: "100%",
          marginX: "mx-auto",
          marginY: "my-0",
          width: "100%"
        }}
        src="/images/svg/Flux-FlowChart.svg"
      />
    </LayoutContainer>
  </LayoutContainer>
);

export { FlowChart };
