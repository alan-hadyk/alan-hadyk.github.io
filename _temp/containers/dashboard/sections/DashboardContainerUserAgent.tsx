import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { BrowserInfo } from "components/molecules/BrowserInfo/BrowserInfo";
import { useEffect, useState } from "react";
import { getUserAgent } from "helpers/window/getUserAgent";
import { ContentFrameVariant } from "components/molecules/ContentFrame/@types/ContentFrame";

const DashboardContainerUserAgent: React.FC = () => {
  const [description, setDescription] = useState<string | undefined>(undefined);

  useEffect(() => {
    setDescription(getUserAgent());
  }, []);

  return (
    <ContentFrame
      description={description}
      title="User Agent"
      themeClasses={{
        container: {
          flex: "flex-[1_0_20%]"
        }
      }}
      variant={ContentFrameVariant.Corners}
    >
      <BrowserInfo />
    </ContentFrame>
  );
};

export { DashboardContainerUserAgent };
