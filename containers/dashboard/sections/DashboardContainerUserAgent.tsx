import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { BrowserInfo } from "components/molecules/BrowserInfo/BrowserInfo";
import { useEffect, useState } from "react";
import { dashboardContainerUserAgentDefaultThemeClasses } from "containers/dashboard/styles";
import { getUserAgent } from "helpers/window/getUserAgent";

const DashboardContainerUserAgent: React.FC = () => {
  const [description, setDescription] = useState<string | undefined>(undefined);

  useEffect(() => {
    setDescription(getUserAgent());
  }, []);

  return (
    <ContentFrame
      description={description}
      shouldDisplayCorners
      title="User Agent"
      themeClasses={dashboardContainerUserAgentDefaultThemeClasses}
    >
      <BrowserInfo />
    </ContentFrame>
  );
};

export { DashboardContainerUserAgent };
