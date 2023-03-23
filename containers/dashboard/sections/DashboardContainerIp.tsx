import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { Earth } from "components/molecules/Earth/Earth";

const DashboardContainerIp: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="IP: 127.0.0.1"
    themeClasses={{
      container: {
        flex: "flex-[0_1_30%]"
      }
    }}
  >
    <Earth />
  </ContentFrame>
);

export { DashboardContainerIp };
