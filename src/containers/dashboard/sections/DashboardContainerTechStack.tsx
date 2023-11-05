import { ContentFrameVariant } from "@app/components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";
import { HorizontalImages } from "@app/components/molecules/HorizontalImages/HorizontalImages";

const DashboardContainerTechStack: React.FC = () => (
  <ContentFrame
    title="Tech Stack"
    themeClasses={{
      container: {
        flex: "flex-[1_0_40%]",
      },
    }}
    variant={ContentFrameVariant.Corners}
  >
    <HorizontalImages />
  </ContentFrame>
);

export { DashboardContainerTechStack };
