import { DashboardElement } from "components/molecules/DashboardElement/DashboardElement";
import { BrowserInfo } from "components/molecules/BrowserInfo/BrowserInfo";
import { useEffect, useState } from "react";

const getDescription = () =>
  typeof window !== "undefined"
    ? window.navigator && window.navigator.userAgent
    : "";

const UserAgent: React.FC = () => {
  const [description, setDescription] = useState<string | undefined>(undefined);

  useEffect(() => {
    setDescription(getDescription());
  }, []);

  return (
    <DashboardElement
      description={description}
      shouldDisplayCorners
      title="User Agent"
      themeClasses={{
        container: {
          flex: "flex-[1_0_20%]"
        }
      }}
    >
      <BrowserInfo />
    </DashboardElement>
  );
};

export { UserAgent };
