import { DashboardElement } from "components/molecules/DashboardElement";
import { NextLogo } from "components/molecules/NextLogo";

const PoweredBy: React.FC = () => (
  <DashboardElement
    flex="flex-[1_0_30%]"
    shouldDisplayCorners
    title="Powered by"
  >
    <NextLogo />
  </DashboardElement>
);

export { PoweredBy };
