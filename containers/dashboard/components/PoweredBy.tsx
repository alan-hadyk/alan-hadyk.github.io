import { DashboardElement } from "components/molecules/DashboardElement/DashboardElement";
import { NextLogo } from "components/molecules/NextLogo";

const PoweredBy: React.FC = () => (
  <DashboardElement
    shouldDisplayCorners
    title="Powered by"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]"
      }
    }}
  >
    <NextLogo />
  </DashboardElement>
);

export { PoweredBy };
