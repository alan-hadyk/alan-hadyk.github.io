import { DashboardElement } from "components/molecules/DashboardElement/DashboardElement";
import { Earth } from "components/molecules/Earth";

const Ip: React.FC = () => (
  <DashboardElement
    shouldDisplayCorners
    title="IP: 127.0.0.1"
    themeClasses={{
      container: {
        flex: "flex-[0_1_30%]"
      }
    }}
  >
    <Earth />
  </DashboardElement>
);

export { Ip };
