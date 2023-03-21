import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { HorizontalIcons } from "components/molecules/HorizontalIcons/HorizontalIcons";

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
    <HorizontalIcons />
  </ContentFrame>
);

export { TechStack };
