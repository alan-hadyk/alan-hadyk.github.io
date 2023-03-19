import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { AnimatedIcons } from "components/molecules/AnimatedIcons/AnimatedIcons";

const TechStack: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="Tech Stack"
    themeClasses={{
      container: {
        flex: "flex-[1_0_40%]"
      }
    }}
  >
    <AnimatedIcons />
  </ContentFrame>
);

export { TechStack };
