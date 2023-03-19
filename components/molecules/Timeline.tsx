import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { HexagonFill } from "components/molecules/Hexagon/@types/Hexagon";
import { Hexagon } from "components/molecules/Hexagon/Hexagon";

const Timeline: React.FC = () => (
  <LayoutContainer
    themeClasses={{
      height: "h-100%",
      position: "relative",
      width: "w-16"
    }}
  >
    <LayoutContainer
      themeClasses={{
        height: "h-16",
        left: "left-0",
        position: "absolute",
        top: "top-0",
        width: "w-16"
      }}
    >
      <Hexagon fill={HexagonFill.Solid} />
    </LayoutContainer>
    <LayoutContainer
      themeClasses={{
        backgroundColor: "bg-blue300",
        bottom: "bottom-0",
        left: "left-50%",
        position: "absolute",
        top: "top-0",
        translate: "translate-x-negative50%",
        width: "w-2"
      }}
    />
  </LayoutContainer>
);

export { Timeline };
