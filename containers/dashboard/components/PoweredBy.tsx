import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { NextLogo } from "components/molecules/NextLogo";

const PoweredBy: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="Powered by"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]"
      }
    }}
  >
    <NextLogo />
  </ContentFrame>
);

export { PoweredBy };
